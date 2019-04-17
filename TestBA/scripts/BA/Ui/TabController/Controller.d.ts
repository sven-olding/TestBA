declare module BA.Ui.TabController {
    class Controller {
        static debug: any;
        static link_AppBase_Url: string;
        static link_Base_Url: string;
        static link_UiTabControl_SetTabs: string;
        static link_Start_Url: string;
        static link_Close_Url: string;
        static link_CheckAlive_Url: string;
        static isMobile: boolean;
        rightClickedTab: string;
        private static _Instance;
        private _ActiveTab;
        private _Tabs;
        private _TabToActivateAfterLoad;
        private _TabToCloseAfterLoad;
        private _IFrameAreaName;
        private _TabsAreaName;
        private _TabsOverflowName;
        private _UpdateHistory;
        private _WaitAnimationVisible;
        private _WaitAnimationCounter;
        private _LoadingAnimationTimerHandle;
        private _PoolInterWindowTimerHandle;
        private _ServerIsOffline;
        private _ApplicationRunningInstanceId;
        private _SetTabsTimeoutHandler;
        private _State;
        private _LastError;
        static GetInstance(): Controller;
        static GetInstanceId(): string;
        constructor();
        UpdateHistory: boolean;
        ActiveTab: Tab;
        readonly Tabs: Array<Tab>;
        IFrameAreaName: string;
        TabsAreaName: string;
        TabsOverflowName: string;
        CloseTabAfterLoad: Tab;
        WaitAnimationVisible: boolean;
        readonly State: ControllerState;
        LastError: string;
        AddTab(url: string, title?: string, canClose?: boolean, delayLoading?: boolean, guid?: BA.Classes.Guid, andActivate?: boolean, initialLoad?: boolean, overrideTabReference?: string): Tab;
        MoveActiveBeforeTab(guid: string): void;
        RemoveTab(tab: Tab): void;
        private _RemoveTab;
        FocusActiveTab(): void;
        CanCloseAllTabs(): boolean;
        ClearAllTabs(): void;
        CloseAllTabs(skipTab: Tab): void;
        private _CloseAllTabs;
        ShowNextTab(): void;
        ShowPrevTab(): void;
        GetTabByGuid(guid: BA.Classes.Guid): Tab;
        GetTabByReference(tabReference: string): Tab;
        FixHeight(): void;
        ShowCloseNotification(): void;
        HideCloseNotification(): void;
        WindowStateChange(): void;
        ActivateParentTabForIFrameByGuid(guid: string): void;
        ActivateTabForIFrameByGuid(guid: string): void;
        CloseTabForIFrameByGuid(guid: string): void;
        SetTabTitleForIFrame(title: string, guid: string): void;
        GetTabTitleForIFrame(guid: string): string;
        SetTabUrlForIFrame(url: string, guid: string): void;
        SetTabDirtyForIFrame(dirty: boolean, guid: string): void;
        GetTabDirtyForIFrame(guid: string): boolean;
        SetTabAsCanCloseForIFrame(guid: string): void;
        GetTabAsCanCloseForIFrame(guid: string): boolean;
        SetTabAutorefreshParentForIFrame(autoRefresh: boolean, guid: string): void;
        SetTabAutorefreshForIFrame(autoRefresh: boolean, guid: string): void;
        GetTabAutorefreshForIFrame(guid: string): boolean;
        CloseAllTabsForIFrameByGuid(guid: string): void;
        SetTabAsLoadedForIFrame(guid: string): void;
        SetDocumentOidForIFrame(oid: string, guid: string): void;
        UpdateDocumentPartsForIFrame(oid: string, keys: string[]): void;
        SetCloseTabForIFrame(guid: string): void;
        GetTabsAsJSON(): string;
        SetTabsFromJSON(tabs: any): void;
        SaveTabs(): void;
        SetHistory(): void;
        JumpToRunningInstance(): void;
        PoolInterWindow(): void;
        CheckAlive(): void;
        ShowWaitAnimation(): void;
        HideWaitAnimation(): void;
    }
    enum ControllerState {
        Undefined = 0,
        Instantiated = 1,
        Busy = 2,
        Idle = 3
    }
}
