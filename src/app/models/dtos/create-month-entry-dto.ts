export interface CreateMonthEntryDto {
    entryDate: Date;
    amount: number;
    isPositive: boolean;
    label: number;
}