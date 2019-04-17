declare module BA.Ui.Models {
    class JsonFormResult {
        ClientOnSuccessCallback: string;
        CloseTab: Boolean;
        Message: string;
        ErrorMessage: string;
        OpenUrl: OpenUrlInWindow;
        OpenUrlInTab: string;
        Reload: Boolean;
        ResultType: number;
        Status: number;
        AttachmentModel: AttachmentJSONModel;
        OpenAttachmentBehaviour: string;
        SetTabAsDirty: Boolean;
        RefreshGrid: Boolean;
        SaveExecuted: Boolean;
    }
}
