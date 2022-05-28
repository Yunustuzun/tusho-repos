function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZINT_TRAIN_SALES_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}