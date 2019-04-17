declare module BA.Ui.Grid {
    class GridAsControlEvents {
        private static _NewPrimaryRecordGuid;
        private static _LoadGridLayoutData;
        static OnInit(s: any, e: any): void;
        static OnBeginCallback(s: BAClientGridView, e: any): void;
        static OnEndCallback(s: BAClientGridView, e: any): void;
        /**
         * Handler for the command column clicks in case of grid showing the detail data including detail data from parent record.
         * @param s grid
         * @param e clicked row
         */
        static OnClickWithParentData(s: any, e: any): void;
    }
}
