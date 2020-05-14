import { ModelWrapper } from './model-wrapper';
import { Label } from './label';

export interface MonthEntry extends ModelWrapper{
    fields: MonthEntryFields;
}

interface MonthEntryFields {
    entryDate: Date;
    amount: number;
    isPositive: boolean;
    label: number;
    // label: Label; TODO
}