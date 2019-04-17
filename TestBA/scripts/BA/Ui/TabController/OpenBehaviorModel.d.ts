declare module BA.Ui.TabController {
    class OpenBehaviorModel {
        private _BlockOpening;
        private _ShowPopup;
        private _ShowToast;
        private _ShowQuestion;
        private _Message;
        private _OnYesURL;
        private _JavaScriptFunctionOnYes;
        private _ReloadPageAfterLoad;
        constructor();
        BlockOpening: boolean;
        ShowPopup: boolean;
        ShowToast: boolean;
        ShowQuestion: boolean;
        Message: string;
        OnYesURL: string;
        JavaScriptFunctionOnYes: string;
        ReloadPageAfterLoad: boolean;
    }
}
