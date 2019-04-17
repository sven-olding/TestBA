declare module BA.Ui.LayoutSystem {
    /**
     * A flow layout to layout items in one line vertical or horizontal.
     * @author ARa
     */
    class FlowLayout extends LayoutBase {
        /** Count of items with no fixed width. Needed for layout calculations */
        private _DynamicItemCount;
        /** Indicates if the items are arranged from left to right or top to bottom */
        orientation: any;
        /**
         * Create a new flow layout with the specified data.
         * @constructor
         * @param data - Data of the flow layout. (JSON layout structure).
         */
        constructor(data: any);
        /**
         * Calculates the sum of all fixed item sizes. Needed for layout calculations.
         * @returns The sum of all fixed item sizes.
         */
        private CalculateFixedSize;
        /**
         * Sizes the layout to fit its content.
         */
        SizeToFit(): void;
        /**
         * Layouts the items.
         */
        Update(): void;
    }
}
