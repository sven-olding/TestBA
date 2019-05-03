var TestBA;
(function (TestBA) {
    var Ui;
    (function (Ui) {
        "use strict";
        var Actions = /** @class */ (function () {
            function Actions() {
            }
            Actions.CompleteTaskAction = function (event, customData) {
                BA.Ui.Toast.Info("CompleteTaskAction ausgeführt");
            };
            return Actions;
        }());
        Ui.Actions = Actions;
        window.setTimeout(function () {
            console.log("registerAction");
            BA.Ui.Actions.ActionHandler.RegisterAction("TestBA.Ui.Actions.CompleteTaskAction", Actions.CompleteTaskAction);
        }, 10);
    })(Ui = TestBA.Ui || (TestBA.Ui = {}));
})(TestBA || (TestBA = {}));
//# sourceMappingURL=Actions.js.map