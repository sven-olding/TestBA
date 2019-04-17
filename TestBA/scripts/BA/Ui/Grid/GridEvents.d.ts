declare module BA.Ui.Grid {
    class GridEvents {
        private static _SaveLayoutProp;
        private static _LayoutName;
        private static _LayoutPublic;
        private static _LayoutDefault;
        private static _SelectionCallbackTimeHandle;
        private static _GridToUpdateVisibilityFor;
        private static _GridViewSelectionKey;
        private static _LastClickedNodeKey;
        private static _LastClickTicks;
        private static _SingleClickHandler;
        static LoadLayout: boolean;
        static OnInit(s: any, e: any): void;
        static OnGridFormSuccess(s: any, e: any): boolean;
        static OnGridFormFailure(s: any, e: any): void;
        static OnBeginCallback(s: any, e: any): void;
        static OnEndCallback(s: any, e: any): void;
        static OnResize(s: any, e: any): void;
        static OnSelectionChanged(s: any, e: any): void;
        private static GetSelectedFieldValuesCallback;
        static OnColumnMoving(s: any, e: any): void;
        static OnColumnResizing(s: any, e: any): void;
        static OnRowClick(s: any, e: any): boolean;
        static DefaultSingleClick(s: any, e: any): void;
        static DefaultDoubleClick(s: any, e: any): void;
        static DefaultGridStartEdit(s: any, e: any): void;
        static OnEditStart(grid: any, visibleIndex: any): void;
        /**
         * Save the Layout of a Grid
         * @param button the event button
         * @param evt the event arguments
         */
        static OnLayoutSave(button: BA.Ui.Dialog.BADialogButton, evt: ASPxClientButtonClickEventArgs): void;
    }
}
