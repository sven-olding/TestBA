declare module BA.Ui.Models {
    /** Holds data necessary to build the form model. */
    class FormModelProvider {
        /** Class to instantiate */
        Class: string;
        /** Method to call */
        Method: string;
        /** Parameters to pass */
        MethodParameters: {
            [key: string]: string;
        };
    }
}
