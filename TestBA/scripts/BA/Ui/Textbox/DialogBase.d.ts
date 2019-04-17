declare module BA.Ui.Dialog {
    /**
     * Base class for all client side dialog handlers.
     * @author ARa
     */
    class DialogBase {
        /** Raw JSON layout. */
        private _Layout;
        /** View to process the layout */
        private _View;
        /**
         * Gets the layout
         */
        /**
        * Sets the layout
        */
        protected Layout: any;
        /**
         * Gets the view
         */
        /**
        * Sets the view
        */
        protected View: LayoutSystem.LayoutManager;
        /**
         * Called after the dialog is completely loaded. Creates and initializes the layout
         * of the dialog.
         */
        Initialize(): void;
        /**
         * Called on resize. Updates the view and layout.
         */
        Resize(): void;
    }
}
