/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/router/ZINT_TRAIN_ROUTER/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});