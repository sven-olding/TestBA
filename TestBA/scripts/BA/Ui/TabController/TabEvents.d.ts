declare module BA.Ui.TabController {
    class TabEvents {
        private static _clickedTabGuid;
        static OnInit(): void;
        static OnTabMouseDown(e: any): boolean;
        static OnTabMouseUp(e: any): void;
        static OnPopupMenuPopup(s: any, e: any): void;
        static OnPopupMenuItemClick(s: any, e: any): void;
    }
}
