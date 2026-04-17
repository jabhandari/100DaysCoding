import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
    const checkPullCommand = vscode.commands.registerCommand(
        'gitPullReminder.checkPull',
        async () => {
            await showPullReminder();
        }
    );
    context.subscriptions.push(checkPullCommand);

    const config = vscode.workspace.getConfiguration('gitPullReminder');
    const enabled = config.get<boolean>("enabled", true);
    if (!enabled){
        return;
    }

    if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0 ) {
        setTimeout(() => {
            showPullReminder();
        }, 12000);
    }

    async function showPullReminder() {
        const selection= await vscode.window.showInformationMessage(
            "Don't forget to pull the latest changes from your Git repository!",
            "Pull Now",
            "Remind Me Later"
        );  
        if (selection === "Pull Now") {
         try{
            await vscode.commands.executeCommand('git.pull');
            vscode.window.showInformationMessage('Successfully pulled changes from Git repository.');
         } catch (error) {
            vscode.window.showErrorMessage('Failed to pull changes from Git repository.');
         }
        }
    }
}
export function deactivate() {}