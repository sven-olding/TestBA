declare module BA.Ui {
    class PDFManagement {
        /**
            * document object
            */
        private _PdfDoc;
        private _CurrentPage;
        private _PageRendering;
        private _PageNumPending;
        private _Canvas;
        private _CanvasContext;
        private _Scale;
        /**
            * Initializes a new instance of the PDFManagement class.
            * @param pdfDoc PDF.js document object - PDFJS.getDocument(pdfUrl)
            * @param canvas Canvas object from the view
            */
        constructor(pdfDoc: any, canvas: any);
        static OpenPDF(attachmentId: any, temporaryKey: any): void;
        /**
            * Render the page with the given number
            * @param pageNumber Number of the page
            */
        RenderPage(pageNumber: number): void;
        /**
            * Show the next page
            */
        NextPage(): void;
        /**
            * Show the previous page
            */
        PreviousPage(): void;
        /**
            * Zoom in
            */
        ZoomIn(): void;
        /**
            * Zoom out
            */
        ZoomOut(): void;
        /**
            * Gets the current page number
            */
        /**
        * Sets current page number
        */
        CurrentPage: number;
        readonly NumberOfPages: number;
    }
}
