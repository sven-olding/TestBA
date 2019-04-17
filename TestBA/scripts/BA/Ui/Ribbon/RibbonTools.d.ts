declare module BA.Ui.Ribbon {
    class RibbonTools {
        private static ribbonInitialized;
        static Initialize(extraActions?: any): void;
        static InitializeCustomData(s: any): void;
        static EvaluateRibbonItemVisibility(ribbonItem: any, containedTypes: any, count: any, selectedNodeOrm: any, temporaryKey: any, grid: any, ev: any): boolean;
        static EnableOnlyForFormMode(ribbonItem: any): boolean;
        static EnableIfDataDashAttributeHasValue(ribbonItem: any, grid: any, ev: any): boolean;
        static EnableActionIfClientVariableIsTrue(ribbonItem: any): any;
        static EnableIfMethodReturnsTrue(ribbonItem: any): any;
        static IfClientControlHasValue(ribbonItem: any): boolean;
        static SelectedNodeIsOfOrmType(ribbonItem: any, containedTypes: any, selectedNodeOrm: any): boolean;
        static SelectedItemsCount(ribbonItem: any, count: any): boolean;
        static SupportedOrmTypeVisibility(ribbonItem: any, containedTypes: any): boolean;
        static EnableIfSelectedOrmIsOfSupportedTypes(ribbonItem: any, count: any): boolean;
        static EnableActionIfTabIsNotDirty(ribbonItem: any): boolean;
        static EnableActionsIfTemporaryRecord(ribbonItem: any, temporary: any): boolean;
        static EnableActionIfValuesAreNotSame(ribbonItem: any): boolean;
        static EnableActionIfValuesAreSame(ribbonItem: any): boolean;
        static EnableActionIfAnyControlContainsAnyValue(ribbonItem: any): boolean;
        static EnableActionIfTrue(ribbonItem: any): any;
        static EnableActionIfUserHasRole(ribbonItem: any): any;
        static EnableActionIfValuesContains(ribbonItem: any): any;
        static EnableActionIfValuesNotContains(ribbonItem: any): boolean;
        private static GetFieldContentReadMode;
    }
}
