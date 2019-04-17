declare module BA.Classes {
    class Guid {
        /**
         * @private Backing store for the guid
         */
        private _Guid;
        /**
         * Generates a new guid
         */
        constructor();
        /**
         * Generates a new guid
         * @param guid
         */
        constructor(guid: Guid);
        /**
         * Generates a new guid
         * @param guid
         */
        constructor(guid: string);
        /**
         * Returns a Guid.Empty
         */
        static Empty(): string;
        toString(): string;
        /**
         * Converts a guid from the dashless guid to the one with dashes
         * @param value Guid
         */
        static DashlessToGuid(value: string): string;
        /**
         * Converts a guid from the dashless guid to the one with dashes
         * @param value Guid
         */
        static ToDashlessGuid(value: string): string;
        /**
         * Check if a string is a guid
         * @param value
         */
        static IsGuid(value: string): boolean;
    }
}
