/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="devexpress-web.d.ts" />
declare var hiddenField: ASPxClientHiddenField;
declare var mainCallbackPanel: ASPxClientCallbackPanel;
declare var loginPopup: ASPxClientPopupControl;
declare var searchButton: ASPxClientButton;
declare var searchComboBox: ASPxClientComboBox;
declare var roomsNumberSpinEdit: ASPxClientSpinEdit;
declare var adultsNumberSpinEdit: ASPxClientSpinEdit;
declare var childrenNumberSpinEdit: ASPxClientSpinEdit;
declare var checkInDateEdit: ASPxClientDateEdit;
declare var checkOutDateEdit: ASPxClientDateEdit;
declare var backSlider: ASPxClientImageSlider;
declare var locationComboBox: ASPxClientComboBox;
declare var nightyRateTrackBar: ASPxClientTrackBar;
declare var customerRatingTrackBar: ASPxClientTrackBar;
declare var ourRatingCheckBoxList: ASPxClientCheckBoxList;
declare var startFilterPopupControl: ASPxClientPopupControl;
declare var imagePopupControl: ASPxClientPopupControl;
declare var emailTextBox: ASPxClientTextBox;
declare var creditCardEmailTextBox: ASPxClientTextBox;
declare var accountEmailTextBox: ASPxClientTextBox;
declare var bookingPageControl: ASPxClientPageControl;
declare var paymentTypePageControl: ASPxClientPageControl;
declare var offerFormPopup: ASPxClientPopupControl;
declare var roomsSpinEdit: ASPxClientSpinEdit;
declare var adultsSpinEdit: ASPxClientSpinEdit;
declare var childrenSpinEdit: ASPxClientSpinEdit;
declare var hotelDetailsCallbackPanel: ASPxClientCallbackPanel;
declare var leftPanel: ASPxClientPanel;
declare var menuButton: ASPxClientButton;
declare var aboutWindow: ASPxClientPopupControl;
declare var offersZone: ASPxClientDockZone;
declare module DXDemo {
    function onMainMenuItemClick(s: ASPxClientMenu, e: ASPxClientMenuItemClickEventArgs): void;
    function onLoginButtonClick(s: ASPxClientButton, e: ASPxClientButtonClickEventArgs): void;
    function onSearchButtonClick(): void;
    function onSearchComboBoxIndexChanged(s: ASPxClientComboBox, e: ASPxClientProcessingModeEventArgs): void;
    function onIndexOfferCloseClick(index: number): void;
    function onLogoClick(): void;
    function onMenuNavButtonCheckedChanged(s: ASPxClientCheckBox, e: ASPxClientProcessingModeEventArgs): void;
    function onBackNavButtonClick(s: ASPxClientButton, e: ASPxClientButtonClickEventArgs): void;
    function updateSearchResults(): void;
    function onBookHotelButtonClick(hotelID: string): void;
    function onDetailsHotelButtonClick(hotelID: string): void;
    function onShowStartFilterButtonClick(s: ASPxClientButton, e: ASPxClientButtonClickEventArgs): void;
    function onChangeStartFilterButtonClick(s: ASPxClientButton, e: ASPxClientButtonClickEventArgs): void;
    function onBookRoomButtonClick(roomID: string): void;
    function onShowRoomsButtonClick(): void;
    function onShowDetailsButtonClick(): void;
    function onRoomImageNavItemClick(roomID: string, pictureName: string): void;
    function onRoomsNavBarExpandedChanged(s: ASPxClientNavBar, e: ASPxClientNavBarGroupEventArgs): void;
    function onNextBookingStepButtonClick(step: number): void;
    function onAccountCaptchaHiddenFieldInit(s: ASPxClientHiddenField, e: ASPxClientEventArgs): void;
    function onFinishBookingStepButtonClick(): void;
    function OnPrintInvoiceButtonClick(): void;
    function onOfferClick(offerID: string): void;
    function onSpecialOfferCheckButtonClick(hotelID: string, locationID: string): void;
    function onIndexOfferClick(): void;
    function onControlsInit(): void;
    function updateRatingLabels(ratingControl: ASPxClientTrackBar): void;
    function onAboutWindowCloseUp(): void;
    function onRatingControlItemClick(s: ASPxClientRatingControl, e: ASPxClientRatingControlItemClickEventArgs): void;
    function onInputKeyDown(s: ASPxClientTextBox, e: ASPxClientEditKeyEventArgs): void;
}
