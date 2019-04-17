declare module BA.Ui.Models {
    class FormHiddenDataModel {
        FormGuid: BA.Classes.Guid;
        FromId: string;
        FormInDialog: Boolean;
        RecordId: BA.Classes.Guid;
        OrmDataSource: string;
        TemporaryKey: BA.Classes.Guid;
        AttachmentTempKey: BA.Classes.Guid;
        RecordCacheId: BA.Classes.Guid;
        FormModelClass: string;
        TemplateId: string;
        OnBeginMethod: string;
        OnSuccessMethod: string;
        OnFailureMethod: string;
        DelayedInProgress: Boolean;
        ModelErrors: string;
        IsFromBusinessmail: Boolean;
        RefreshGridOnSuccessId: string;
        FormTabTitle: string;
        AdditionalData: {
            [key: string]: any;
        };
        DialogButtonsDefinition: DialogButtonDefinition[];
        FormResult: JsonFormResult;
        OpenBehavior: any;
        ActionPostSaveClass: string;
        ActionPostSaveMethod: string;
        ActionPostSaveMethodParameters: {
            [key: string]: string;
        };
        EditMode: boolean;
        MustSave: boolean;
        MustForceReadMode: boolean;
    }
}
