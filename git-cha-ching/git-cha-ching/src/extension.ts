import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('git-cha-ching.push', () => {
    const workspace = vscode.workspace.workspaceFolders?.[0];
    if (!workspace) {
      vscode.window.showErrorMessage('No workspace folder found.');
      return;
    }

    const execOptions: import('child_process').ExecOptions = { cwd: workspace.uri.fsPath };
    vscode.window.showInformationMessage('Running git push...');

    exec('git push', execOptions, (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Git push failed: ${error.message}`);
        playSound(context, 'error.wav');
        return;
      }
      vscode.window.showInformationMessage('Git push completed successfully.');
      playSound(context, 'sucess.wav');
    });
  });

  context.subscriptions.push(disposable);
}

function playSound(context: vscode.ExtensionContext, soundFile: string) {
  const soundPath = path.join(context.extensionPath, 'sounds', soundFile);
  const platform = process.platform;
  let command: string;

  if (platform === 'win32') {
    const escaped = soundPath.replace(/'/g, "''");
    command = `powershell -NoProfile -ExecutionPolicy Bypass -Command \"(New-Object Media.SoundPlayer '${escaped}').PlaySync();\"`;
  } else if (platform === 'darwin') {
    command = `afplay "${soundPath}"`;
  } else {
    command = `paplay "${soundPath}" || aplay "${soundPath}"`;
  }

  exec(command, (error) => {
    if (error) {
      vscode.window.showWarningMessage(`Unable to play sound: ${error.message}`);
    }
  });
}

export function deactivate() {}
