declare module BA.Ui.Controls {
    class ImageControlEvents {
        static RenderImageOnStartup(s: ASPxClientControl): void;
        static OnFilesUploadStart(s: ASPxClientControl, e: ASPxClientUploadControlFilesUploadStartEventArgs): void;
        static OnFilesUploadComplete(s: ASPxClientControl, e: ASPxClientUploadControlFilesUploadCompleteEventArgs): void;
        private static GetImage;
        static DropZoneEnter(s: ASPxClientControl, e: ASPxClientUploadControlDropZoneEnterEventArgs): void;
        static DropZoneLeave(s: ASPxClientControl, e: ASPxClientUploadControlDropZoneLeaveEventArgs): void;
        static OnImageDeleteClick(s: ASPxClientControl): void;
        private static PerformDeleteImage;
        static OnImageLoad(s: ASPxClientControl): void;
        private static SetElementVisible;
    }
}
