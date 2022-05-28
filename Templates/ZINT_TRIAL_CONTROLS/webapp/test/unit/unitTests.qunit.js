/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/trial/controls/ZINT_TRIAL_CONTROLS/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});