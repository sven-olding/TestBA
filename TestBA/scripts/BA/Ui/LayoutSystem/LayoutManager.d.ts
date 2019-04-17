declare module BA.Ui.LayoutSystem {
    /**
     * A layout manager class to build and update a specified layout.
     * @author ARa
     */
    class LayoutManager {
        /** Layout to manage. */
        layouts: any;
        /** Layout which is currently used. */
        currentLayout: LayoutBase;
        /** The default layout which is used if there is no other layout for the current screen size. */
        defaultLayout: LayoutBase;
        /**
         * Creates a new layout manager with the specified layout.
         * @constructor
         * @param layout - The layout to manage.
         */
        constructor(layout: any);
        /**
         * Builds the layout by recursivly converting the raw layout data into an object structure.
         * @param items - Items to process
         * @param visible - Indicates if the layout plus children should be visible or not.
         */
        Build(items: any[], visible: boolean): void;
        /**
         * Updates the layout.
         */
        Update(): void;
        /**
         * Updates the layout recursivly.
         * @params items - Items to update.
         */
        UpdateItems(items: any[]): void;
    }
}
