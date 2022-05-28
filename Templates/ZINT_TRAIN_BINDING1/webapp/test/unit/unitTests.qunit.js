/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/binding1/ZINT_TRAIN_BINDING1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});