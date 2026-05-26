import * as vscode from 'vscode';
import {exec} from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

	const disposable = vscode.commands.registerCommand('git-cha-ching.push', () => {
		const workspace= vscode.workspace.workspaceFolders?.[0];
		if (!workspace) {
			vscode.window.showErrorMessage('No workspace folder found.');
			return;
		}
		vscode.window.showInformationMessage('Pushing to GitHub...');
		const execOptions: import('child_process').ExecOptions = { cwd: workspace.uri.fsPath };
		exec('git push', execOptions, (error: import('child_process').ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => {
			if (error) {
				vscode.window.showErrorMessage(`Git push failed: ${error.message}`);
				playSound(context, 'error.wav');
				return;
			}
			vscode.window.showInformationMessage('Git push completed successfully.');
			playSound(context, 'success.wav');
		});
	});

	context.subscriptions.push(disposable);

}
function playSound(context:vscode.ExtensionContext, soundFile: string) {
	const soundPath = path.join(context.extensionPath, 'sounds', soundFile);
	vscode.window.showInformationMessage(`Playing sound: ${soundPath}`);
}

export function deactivate() {}
