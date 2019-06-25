/* 
taken directly from https://www.npmjs.com/package/classnames
author forgot to export the ClassValue for use
*/
declare type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | boolean;

interface ClassDictionary {
    [id: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

interface ClassArray extends Array<ClassValue> { } // eslint-disable-line @typescript-eslint/no-empty-interface