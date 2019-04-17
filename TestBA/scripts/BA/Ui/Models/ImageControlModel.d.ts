declare module BA.Ui.Models {
    /** Client data model for ImageControl */
    class ImageControlParameters {
        /** Server creates new Guids in this field to avoid client caching */
        RequestGuid: BA.Classes.Guid;
        /** OrmDataSource */
        OrmDataSource: BA.Classes.Guid;
        /** ParentOid */
        ParentOid: BA.Classes.Guid;
        /** TemporaryKey */
        TemporaryKey: BA.Classes.Guid;
        /** AttachmentTempKey */
        AttachmentTempKey: BA.Classes.Guid;
        /** RelationCategory */
        RelationCategory: BA.Classes.Guid;
        /** ImageOid */
        ImageOid: BA.Classes.Guid;
        /** IsReadOnly */
        IsReadOnly: Boolean;
        /** ImageQualityGuid */
        ImageQualityGuid: BA.Classes.Guid;
        /** ControlPrefix */
        ControlPrefix: String;
    }
}
