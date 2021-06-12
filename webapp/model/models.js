sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/Device"], function (JSONModel, Device) {
  "use strict";

  return {
    createDeviceModel: function () {
      var oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },

    createOrdersModel: function () {
      var model = new JSONModel();
      return model;
    },
    
    createOrdersModelWithMockData: function(){
      var model = new JSONModel("model/orders.json");
      return model;
    }
  };
});
