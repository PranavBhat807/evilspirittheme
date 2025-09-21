const vscode = require("vscode");

/**
 * Called when the extension is activated
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  const config = vscode.workspace.getConfiguration("editor");

  // Settings we want to enforce
  const updates = {
    fontLigatures: true,
    cursorBlinking: "expand",
    cursorSmoothCaretAnimation: "on",
    cursorStyle: "line",
    cursorWidth: 3
  };

  Object.entries(updates).forEach(([key, value]) => {
    const current = config.get(key);
    if (current !== value) {
      config.update(key, value, vscode.ConfigurationTarget.Global);
    }
  });

  vscode.window.showInformationMessage("evilspirit theme settings applied!");
}

function deactivate() {}

module.exports = { activate, deactivate };
