declare module BA.Ui.LayoutSystem {
    /**
     * Base class for all layouts of the dynamic layout system.
     * @author ARa
     */
    class LayoutBase {
        /**
         * ID of the HTML node.
         */
        id: string;
        /** JQuery node */
        node: JQuery;
        /** Frame */
        frame: any;
        /** Array of children */
        items: any[];
        /** Width */
        width: number;
        /** Height */
        height: number;
        /** Additional options for the layout like an orientation, etc. */
        layoutOptions: any;
        /** Indicates if the item is visible or not. */
        visible: boolean;
        /** Size of the scroll bar (calculated at runtime). */
        private _ScrollBarSize;
        /**
         * Gets the size of the scrollbar
         */
        protected readonly ScrollbarSize: number;
        /**
         * Sets the scrollbar size
         */
        protected ScrollBarSize: number;
        /**
         * Created the layout object and fills in the specified data.
         * @constructor
         * @param data - Data for the layout.
         */
        constructor(data: any);
        /**
         * Checks if scroll bars are visible
         * @param e -
         * @returns An object containing two boolean properties <b>vertical</b> and <b>horizontal</b>.
         */
        protected HasScrollBar(e: any): any;
        /**
         * Calculates the size of the scroll bar.
         * @returns {Number} The size of the scroll bar in pixels.
         */
        protected CalculateScrollBarSize(): number;
        /**
         * Updates the layout by layouting child items, etc. Needs to be implemented in derived classes.
         * @abstract
         */
        Update(): void;
    }
}
