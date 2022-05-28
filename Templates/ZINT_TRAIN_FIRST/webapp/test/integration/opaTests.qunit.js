/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/first/ZINT_TRAIN_FIRST/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});