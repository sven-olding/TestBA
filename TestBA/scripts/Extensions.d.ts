interface String {
    startsWith: (prefix: string) => boolean;
    endsWith: (suffix: string) => boolean;
}
interface CustomData {
    [key: string]: Object;
}
interface GIConfiguration {
    base_url: string;
    app_base_url: string;
    current_user_id: string;
    attachmentEditSettingsDocx: string;
    attachmentEditSettingsXlsx: string;
    attachmentEditSettingsPdf: string;
    configurationName: string;
    configurationType: string;
}
declare class GridSelectedItems {
    TheItems: any;
    SelectedRow: any;
    TotalSelectedItemsCount: any;
}
interface BAClientFileManager extends MVCxClientFileManager {
    DeletedItems: any;
    cpAttachmentCaption: string;
    cpAttachments: any;
    cpTotalFileSize: any;
    cpShowFileSize: boolean;
    cpShowType: any;
    cpSingleClickFunction: any;
    cpClassName: any;
    cpControlPrefix: string;
}
interface BAClientControl extends ASPxClientControl {
    /** Returns the popup control element this button belongs to */
    GetParentControl(): BAClientControl;
}
interface BAClientHtmlEditor extends MVCxClientHtmlEditor {
    OnPost(): any;
}
interface BAClientRibbon extends ASPxClientRibbon {
    CustomData: any;
    items: any;
}
interface BAClientRibbonTab extends ASPxClientRibbonTab {
    getTabControlTab(): any;
}
interface BARibbonClientEvent extends ASPxClientEvent<ASPxClientRibbonCommandExecutedEventHandler<ASPxClientRibbon>> {
    removeHandlerByControlName(name: any): any;
}
interface BAClientGridView extends MVCxClientGridView {
    cpADMoreResults: boolean;
    cpConfiguredHeight: number;
    cpGridGuid: string;
    cpGridsDataSources: string;
    cpHideGrid: boolean;
    cpBreadCrumbDivID: string;
    cpDrillDownEnabled: boolean;
    cpFilterRowVisible: boolean;
    cpBreadCrumbCollectionJson: string;
    ContextMenuShowSearchPanel(boolean: any): any;
    cpSearchPanelVisible: boolean;
    cpFooterVisible: boolean;
    cpDrillDownTypes: string;
    SelectItem(p1: any, p2: any): any;
    GetFilterRow(): any;
    ContextMenuShowFilterRowMenu(p1: boolean): any;
    ContextMenuShowFilterRow(p1: any): any;
    cpDoubleClickFunction: any;
    cpGroupPanelVisible: boolean;
    ContextMenuShowFooter(visible: boolean): any;
    ContextMenuShowGroupPanel(visible: boolean): any;
    GetRow(index: any): any;
    cpDetailGrid: any;
    cpSingleClickFunction: any;
    UA_UpdateEdit: any;
    lastMultiSelectIndex: any;
    cpGridLayoutConfiguration: any;
    GetSearchEditor(): any;
    deleteItemUrl: string;
    cpFilterExpression: string;
    cpIsAsControl: boolean;
    cpTranslationGrid: string;
    cpControlReadonly: boolean;
    cpAllCombinedGrids: any;
    contextMenuHelper: any;
}
interface BAClientPopupControl extends MVCxClientPopupControl {
    cpMessage: string;
    cpButton: any;
    cpCaption: string;
    cpAllowResize: boolean;
    allowResize: boolean;
    cpShowFooter: boolean;
    cpIcon: any;
    CloseOnEscape: any;
}
interface BAClientTreeList extends MVCxClientTreeList {
    cpTreeBuildingSources: any;
    GetRowByNodeKey(string: any): any;
    cpStartingType: any;
    FocusedNodeType: any;
    cpSetFocusToNodeKey: any;
}
interface BAClientCallbackPanel extends MVCxClientCallbackPanel {
    SetContentHtml: string;
}
interface BAClientHiddenField extends ASPxClientHiddenField {
    GetValue(): any;
}
interface BAClientPopupControl extends MVCxClientPopupControl {
    cpRefreshParentGrid: any;
}
interface BAClientTokenBox extends ASPxClientTokenBox {
    cpAutoSubmit: any;
    UpdateStateHiddenField(): any;
}
interface BAClientComboBox extends MVCxClientComboBox {
    cpMutuallyExclusiveList: any;
    cpAutoSubmit: any;
    cpHasNavigateToConfigurationBtn: any;
    cpInitCanNavigateToConfiguration: any;
}
interface BAClientRadioButtonList extends ASPxClientRadioButtonList {
    cpSelectedItem: any;
}
interface BAClientCheckBoxList extends ASPxClientCheckBoxList {
    cpSelectedItems: any;
}
interface BAClientListBox extends ASPxClientListBox {
    cpSelectedItems: any;
}
interface BAClientTextBox extends ASPxClientTextBox {
    CustomData: any;
}
interface BAClientFileManagerFile extends ASPxClientFileManagerFile {
    index: any;
}
interface BAClientPanel extends ASPxClientPanel {
    updateDocumentPaddings(): any;
}
interface BAJQuery extends JQuery {
    matchHeight(p1: Object): any;
}
interface Window {
    updateTabs: () => any;
    onShow: () => any;
    onHide: () => any;
    onRemove: () => any;
    toastr: Toastr;
    ProgressBar: any;
    appInsights: any;
    FormContent: any;
    tabController: BA.Ui.TabController.Controller;
    showNagScreen: boolean;
    tabProgressStyles: any;
    ButtonSubmit: ASPxClientButton;
    DialogButtonSubmit: ASPxClientButton;
    btnSubmitGridExport: ASPxClientButton;
    btnOk: ASPxClientButton;
    btnCancel: ASPxClientButton;
    btnDelete: ASPxClientButton;
    dataSelectionDialog: BA.Ui.Dialog.DataSelectionDialog;
    onResize: any;
    onReady: any;
    onAfterReady: any;
    onSaveSuccess: any;
    onSaveError: any;
    Historyjs: Historyjs;
    MessageBoxPopUp: BAClientPopupControl;
    Spreadsheet: MVCxClientSpreadsheet;
    DashboardViewer: MVCxClientDashboardViewer;
    TreeList: BAClientTreeList;
    RichEdit: MVCxClientRichEdit;
    Ribbon: BAClientRibbon;
    GridView: BAClientGridView;
    AttachmentManager: BAClientFileManager;
    DesignTreeCallback: BAClientCallbackPanel;
    QuickSearchResults: BAClientCallbackPanel;
    QuickSearch: BAClientTextBox;
    RecordCacheId: BAClientTextBox;
    ToolboxTreeList: BAClientTreeList;
    DesignTreeList: BAClientTreeList;
    ConfigurationPreviewPopup: BAClientPopupControl;
    FormTabTitle: BAClientTextBox;
    AttachmentManager_TempKey: BAClientTextBox;
    ASPx: any;
    dialogDataSelectionPopup: BAClientPopupControl;
    AttachmentDeletedAttachments: BAClientTextBox;
    activeDirectoryRecordsGrid: BAClientGridView;
    DestinationGrid: BAClientGridView;
    popupControl: BAClientPopupControl;
    NewRecordOid: BAClientHiddenField;
    giConfiguration: GIConfiguration;
    isOutlook: boolean;
    pdfManagement: BA.Ui.PDFManagement;
    ClientData: HTMLInputElement;
    SelectedForm: HTMLInputElement;
    temporaryKey: HTMLInputElement;
    Filter: BAClientTextBox;
    Configuration: BAClientTextBox;
    PropertiesPanel: BAClientCallbackPanel;
    HeaderPane: BAClientPanel;
    Name: BAClientTextBox;
    Public: ASPxClientCheckBox;
    Default: ASPxClientCheckBox;
    FormLoadingPanel: ASPxClientLoadingPanel;
    InterceptRtfPasteIntoHtmlUrl: string;
}
