declare module BA.Ui.Models {
    /** Model for passing data about drag and drop functionality in treelist designer. */
    class FormDialogModel {
        constructor();
        /**Guid of the form configuration.*/
        Form: string;
        /**Id of the record that needs to be opened*/
        RecordId: string;
        /**Id of the parent record*/
        ParentRecordId: BA.Classes.Guid;
        /**Guid of the type of the parent record*/
        ParentRecordType: string;
        /**Title of the form if needs to be overridden*/
        Title: string;
        /**Indicator if it should show Buttons*/
        ShowButtons: boolean;
        /**Indicator if it should be allowed to Resize*/
        AllowResizing: boolean;
        /**Relation type between new record and parent record.*/
        RelationType: string;
        /**Relation subtype between new record and parent record.*/
        RelationCategory: string;
        /**Id of the grid that should be refreshed if form is successfully saved.*/
        RefreshGridOnSuccess: string;
        /**Possibility to override on success event*/
        OnSuccessOverride: string;
        /**Possibility to override on begin event*/
        OnBeginOverride: string;
        /**Possibility to override on failure event*/
        OnFailureOverride: string;
        /**Gets or sets the javascript function for on closeup for a dialog*/
        OnCloseUp: string;
        /**DataSource for the form dialog*/
        DataSource: any;
        /**Method which will be executed just before the OnBeginCallback of the dialog*/
        BeforeOnBeginDialogCallback: string;
        /**Gets or sets the width of the dialog*/
        Width: number;
        /**Gets or sets the height of the dialog*/
        Height: number;
        /**Indicator if it is allowed to delete the record*/
        AllowDelete: boolean;
        /**Possibility to override delete function of the dialog*/
        DeleteFunctionOverride: string;
        /**Form model provider in case of opening form whose guid is known only at runtime.*/
        FormModelProvider: FormModelProvider;
        /**Method which will be called on OK*/
        OKButtonOverride: string;
        /** Additional data for the form */
        AdditionalData: [string, any];
    }
}
