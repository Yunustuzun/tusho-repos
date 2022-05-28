/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"int/train/rezervation/ZINT_TRAIN_REZERVATION/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});