declare module BA.Ui.Models {
    /**
     * Model class for all related data selection items
     */
    class RelatedDataSelectionItemModel {
        /** Possible datasource */
        DataSource: BA.Ui.Models.PossibleDataSource;
        /** Indicator if this is Primary */
        IsPrimary: boolean;
        /** Indicator if this subtype is Primary */
        IsSubTypePrimary: boolean;
        /** Key of the item */
        Key: string;
        /** Title of the item */
        Title: string;
        constructor();
    }
}
