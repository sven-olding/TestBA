declare module BA.Ui.Actions {
    class GridActions {
        /**
         * Action to create new related record settings selected record from grid as a parent.
         */
        static ClientActionGridCreate(event: any, customData: CustomData): void;
        /**
         * Refresh the current grid or tree list
         */
        static ClientActionGridRefresh(event: any, customData: CustomData): void;
        /**
         * Perpare data for mass action and submit the grid form
         * @param customData
         */
        static StartMassOperation(event: any, customData: CustomData): void;
        /**
         * opens a configured url
         * @param e
         */
        static ClientActionOpenUrl(e: any): void;
        static ClientActionSelectGridLayoutConfiguration(s: any, e: any): void;
        /**
         * Export Translations to csv
         * @param e
         */
        static ClientActionExportTranslations(e: any): void;
        /**
         * Show or hide the group panel in a grid
         */
        static ClientActionGridShowHideGroupingPanel(): void;
        /**
         * Show or hide the filter row and filter row menu in a grid
         */
        static ClientActionGridShowHideFilterRow(): void;
        /**
         * Show or hide the footer in a grid
         */
        static ClientActionGridShowHideFooter(): void;
        /**
         * Show or hide the search in a grid
         */
        static ClientActionGridShowHideSearchPanel(): void;
        /**
         * Grid - add new row button
         */
        static ClientActionGridAddRow(): void;
        /**
         * Grid - delete row
         */
        static ClientActionGridDeleteRow(event: any, customData: CustomData): void;
        static ClientActionMultipleParentRecords(event: any, customData: CustomData): void;
        static ClientActionUserAdd(): void;
        static ClientActionUserDelete(): void;
        static ClientActionCreateNewFromTemplateGrid(event: any, customData: CustomData): void;
        static ClientActionCreateCommonFieldsUpdateTask(event: any, customData: CustomData): void;
        static ClientActionNewDetail(event: any, customData: CustomData): void;
        static ClientActionNewMaster(event: any, customData: CustomData): void;
        static ClientActionExtractRelatedRecords(event: any, customData: CustomData): void;
        static ClientActionTreeListCollapseAll(event: any, customData: CustomData): void;
        static ClientActionTreeListExpandAll(event: any, customData: CustomData): void;
        /**
         * Double click event for sync source grid
         */
        static SyncSourceGridDoubleClick(s: any, e: any): void;
        /**
         * Double click event for sync user grid
         */
        static SyncUserGridDoubleClick(s: any, e: any): void;
        /**
         * deprecated / unused?
         * @param e
         * @param customData
         */
        static ClientActionOpenRecordFromGrid(event: any, customData: CustomData): void;
    }
}
