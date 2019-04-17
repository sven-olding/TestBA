declare module BA.Ui.Models {
    /**
     * Client data model for DialogDataSelection controls
     */
    class DialogDataSelectionClientDataModel {
        /**List of all selected items*/
        SelectedItems: BA.Ui.Models.RelatedDataSelectionItemModel[];
        /** Description type */
        UseDescriptionType: String;
        /** Grid for dialog selection */
        DialogSelectionGrid: String;
        constructor();
    }
}
