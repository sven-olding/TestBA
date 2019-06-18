module TestBA.Ui {
    "use strict";
    export class Actions {
        public static CompleteTaskAction(event: any, customData: CustomData) {
            try {
                let keys = window.GridView.GetSelectedKeysOnPage();
                const question = "Do you really want to mark the selected tasks complete?";

                BA.Ui.MessageBox.ShowYesNo("Mark complete", question, 0, (result) => {
                    console.log(keys);
                    console.log(BA.Ui.Utils.GetAppBaseUrl());
                    $.ajax({
                        type: "POST",
                        url: BA.Ui.Utils.GetAppBaseUrl() + "/TaskHelper/MarkComplete",
                        data: { additionalData: JSON.stringify(keys) },
                        async: false
                    }).done(function (result: any) {
                        BA.Ui.Toast.Success("Tasks completed");
                    }).fail(function (msg: string) {
                        BA.Ui.Toast.ErrorSticky(msg, "Error");
                    }).always(function () {
                        window.GridView.Refresh();
                    });
                });
            } catch (e) {
                console.log(e);
                BA.Ui.Toast.Error(e);
            }
        }
    }

    window.setTimeout(() => {
        BA.Ui.Actions.ActionHandler.RegisterAction("TestBA.Ui.Actions.CompleteTaskAction", Actions.CompleteTaskAction);
    }, 10);
}