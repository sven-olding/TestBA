declare module BA.Ui.Models {
    class AttachmentJSONModel {
        ID: Classes.Guid;
        ORMEntityGuid: Classes.Guid;
        Record: Classes.Guid;
        TemporaryKey: Classes.Guid;
        ClassType: String;
        Title: String;
        Recalculate: Boolean;
        FormGuid: Classes.Guid;
        RecordCacheID: Classes.Guid;
        TemporaryAttachmentOID: Classes.Guid;
        FileExtension: String;
        ControlPrefix: String;
        constructor();
    }
}
