/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"int/train/field_group/ZINT_TRAIN_FIELD_GROUP/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});