/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/types/ZINT_TRAIN_TYPES/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});