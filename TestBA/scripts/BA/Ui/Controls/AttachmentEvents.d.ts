declare module BA.Ui.Controls {
    class AttachmentEvents {
        private static readonly BEHAVIOUR_DOWNLOAD;
        private static readonly BEHAVIOUR_INPLACE;
        private static readonly BEHAVIOUR_USERSIDE;
        static OnReadModeInit(s: any, e: any): void;
        static AttachmentOpenReadmode(s: any, e: any): void;
        static AttachmentOpen(attachmentControl: any, e: any): void;
        private static BuiltAttachmentModel;
        private static EditFile;
        static AttachmentDeleting(attachmentControl: any, e: any): void;
        static AttachmentUploaded(s: any, e: any): void;
        static AttachmentBeginCallback(s: any, e: any): void;
        static AttachmentEndCallback(s: any, e: any): void;
        static HandleAttachmentResult(formResults: any): void;
    }
}
