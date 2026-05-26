"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));
var import_child_process = require("child_process");
var path = __toESM(require("path"));
function activate(context) {
  const disposable = vscode.commands.registerCommand("git-cha-ching.push", () => {
    const workspace2 = vscode.workspace.workspaceFolders?.[0];
    if (!workspace2) {
      vscode.window.showErrorMessage("No workspace folder found.");
      return;
    }
    vscode.window.showInformationMessage("Pushing to GitHub...");
    const execOptions = { cwd: workspace2.uri.fsPath };
    (0, import_child_process.exec)("git push", execOptions, (error, stdout, stderr) => {
      if (error) {
        vscode.window.showErrorMessage(`Git push failed: ${error.message}`);
        playSound(context, "error.wav");
        return;
      }
      vscode.window.showInformationMessage("Git push completed successfully.");
      playSound(context, "success.wav");
    });
  });
  context.subscriptions.push(disposable);
}
function playSound(context, soundFile) {
  const soundPath = path.join(context.extensionPath, "sounds", soundFile);
  vscode.window.showInformationMessage(`Playing sound: ${soundPath}`);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
