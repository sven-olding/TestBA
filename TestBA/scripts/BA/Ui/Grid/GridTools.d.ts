declare module BA.Ui.Grid {
    class GridTools {
        static UpdateDetailGridHeights(s: any, e: any): void;
        static UpdateDetailGridHeight(s: any, e: any): void;
        static UpdateRibbon(count: any, containedTypes: any, grid: any, ev: any): void;
        static UpdateItemVisibility(overrideCount: any, grid: any, ev: any): void;
        static IsDrillDownAllowed(grid: BAClientGridView, index: any): boolean;
        static DrillDown(grid: BAClientGridView, index: any): void;
        /**
         * Setting breadcrumbs for a grid
         * breadcrumb collection needs to be set on the grid cpBreadCrumbCollectionJson
         * @param grid
         */
        static SetBreadCrumbsForGrid(grid: BAClientGridView): void;
        static HightlightLastFixedColumn(): void;
        static EnableTokensInColumn(): void;
        static SelectedRowsToSession(e: any, functionOnDone: any, functionOnError: any, additionalData: any): void;
        static OpenRecordByIndex(grid: any, index: any): void;
    }
}
