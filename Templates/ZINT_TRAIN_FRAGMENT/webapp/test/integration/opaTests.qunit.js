/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/fragment/ZINT_TRAIN_FRAGMENT/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});