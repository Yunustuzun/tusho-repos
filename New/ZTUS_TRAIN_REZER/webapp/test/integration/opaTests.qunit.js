/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int.training.rezervation/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});