const Main = imports.ui.main;

function init() {
}

function enable() {
	global.display.disconnect(Main.windowAttentionHandler._windowDemandsAttentionId);
}

function disable() {
	Main.windowAttentionHandler._windowDemandsAttentionId = global.display.connect('window-demands-attention', Main.windowAttentionHandler._onWindowDemandsAttention);
}

