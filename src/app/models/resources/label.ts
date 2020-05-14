import { ModelWrapper } from './model-wrapper';

export interface Label extends ModelWrapper {
    fields: LabelFields;
}

interface LabelFields {
    label_text: string;
}