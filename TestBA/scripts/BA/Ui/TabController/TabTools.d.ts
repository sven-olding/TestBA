declare module BA.Ui.TabController {
    class TabTools {
        static OpenTab(url: string, asDirty?: Boolean, overrideTabReference?: string): void;
        static UpdateLinks(): void;
        static HandleJsonFormResult(jsonFormResult: any): void;
        static ActivateTab(guid: any): void;
        static MarkTabAsLoaded(): void;
        static SetUrlForTab(url: any): void;
        static SetDocumentOidForTab(oid: any): void;
        static UpdateDocumentPartsForTab(oid: any, keys: any): void;
        static SetTabName(name: any): void;
        static GetTabName(): string;
        static SetTabAsDirty(tab: TabController.Tab): void;
        static SetTabAsDirtyByControl(control: ASPxClientControl): void;
        private static SetTabAsDirtyInternal;
        static GetTabIsDirty(guid?: string): boolean;
        static SetTabAsClear(): void;
        static ClearAllTabs(): void;
        static SetTabAutorefreshForParent(autoRefresh: boolean): void;
        static SetTabAutorefresh(autoRefresh: boolean): void;
        static GetTabAutorefresh(): boolean;
        static ShowWaitAnimation(): void;
        static HideWaitAnimation(): void;
        static ShowInputBlocker(): void;
        static HideInputBlocker(): void;
        static IsInputBlocked(): boolean;
        static SetTabAsCanClose(): void;
        static GetTabCanClose(guid?: string): boolean;
        static CloseAndOpenTab(url: any): void;
        /**
         * Close a tab
         * @param guid Optional parameter with the guid for the tab that has to be close
         */
        static CloseTab(guid: any): void;
        private static KeydownHandler;
        static AttachKeydownHandler(): void;
        static DetachKeydownHandler(): void;
        /**
         * Returns the hidden data of the currently opened dialog or of the tab form.
         */
        static GetCurrentFormHiddenData(control: ASPxClientControl): BA.Ui.Models.FormHiddenDataModel;
        /**
         * Returns the form name of the currently opened dialog or of the tab form.
         */
        static GetCurrentFormName(control: ASPxClientControl): string;
        static SetEditModeStatus(enabled: boolean): void;
        static GetEditModeStatus(): boolean;
        static SetMustSave(mustSave: boolean): void;
        static SetMustForceReadMode(force: boolean): void;
    }
}
