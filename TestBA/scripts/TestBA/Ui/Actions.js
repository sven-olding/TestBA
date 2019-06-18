var TestBA;
(function (TestBA) {
    var Ui;
    (function (Ui) {
        "use strict";
        var Actions = /** @class */ (function () {
            function Actions() {
            }
            Actions.CompleteTaskAction = function (event, customData) {
                try {
                    var keys_1 = window.GridView.GetSelectedKeysOnPage();
                    var question = "Do you really want to mark the selected tasks complete?";
                    BA.Ui.MessageBox.ShowYesNo("Mark complete", question, 0, function (result) {
                        console.log(keys_1);
                        console.log(BA.Ui.Utils.GetAppBaseUrl());
                        window.GridView.Refresh();
                        BA.Ui.Toast.Success("Tasks completed");
                    });
                }
                catch (e) {
                    console.log(e);
                    BA.Ui.Toast.Error(e);
                }
            };
            return Actions;
        }());
        Ui.Actions = Actions;
        window.setTimeout(function () {
            BA.Ui.Actions.ActionHandler.RegisterAction("TestBA.Ui.Actions.CompleteTaskAction", Actions.CompleteTaskAction);
        }, 10);
    })(Ui = TestBA.Ui || (TestBA.Ui = {}));
})(TestBA || (TestBA = {}));
//# sourceMappingURL=Actions.js.map