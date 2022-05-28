/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/binding2/ZINT_TRAIN_BINDING2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
