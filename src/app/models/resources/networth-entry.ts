import { ModelWrapper } from './model-wrapper';
import { Label } from './label';

export interface NetworthEntry extends ModelWrapper {
    fields: NetworthEntryFields;
}

interface NetworthEntryFields {
    entryDate: Date;
    amount: number;
    isPositive: boolean;
    label: Label;
}