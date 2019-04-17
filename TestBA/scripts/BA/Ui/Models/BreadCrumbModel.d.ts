declare module BA.Ui.Models {
    /** Model for passing data about drag and drop functionality in treelist designer. */
    class BreadCrumbModel {
        /** Display name for the bread crumb **/
        DisplayName: string;
        /** link for the bread crumb **/
        Link: string;
        /** Position of the bread crumb in list **/
        EntryPosition: number;
        /** short name name for the bread crumb **/
        ShortName: string;
        /** Url of the icon **/
        IconUrl: string;
        /** Name of the icon **/
        IconName: string;
        /** Guide of orm type **/
        OrmTypeGuide: string;
    }
}
