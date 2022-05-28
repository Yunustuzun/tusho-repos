/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/mvc1/ZINT_TRAIN_MVC1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});