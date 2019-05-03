module TestBA.Ui {
    "use strict";
    export class Actions {
        public static CompleteTaskAction(event: any, customData: CustomData) {
            BA.Ui.Toast.Info("CompleteTaskAction ausgeführt");
        }
    }

    window.setTimeout(
        function () {
            BA.Ui.Actions.ActionHandler.RegisterAction("TestBA.Ui.Actions.CompleteTaskAction", Actions.CompleteTaskAction);
        },
        10
    );
}