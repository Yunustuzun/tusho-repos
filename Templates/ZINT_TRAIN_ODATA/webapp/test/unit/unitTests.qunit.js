/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/odata/ZINT_TRAIN_ODATA/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});