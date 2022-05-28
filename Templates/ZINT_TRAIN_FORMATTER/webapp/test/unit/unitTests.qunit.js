/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/formatter/ZINT_TRAIN_FORMATTER/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});