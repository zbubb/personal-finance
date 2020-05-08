import { modelWrapper } from './model-wrapper';

export interface Label extends modelWrapper {
    fields: LabelFields;
}

interface LabelFields {
    label_text: string;
}