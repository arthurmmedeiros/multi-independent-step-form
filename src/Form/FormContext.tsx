import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { IUserDetails } from './Steps/UserDetails/Validation';
import { IUserEducation } from './Steps/UserEducation/Validation';

export type MultiStepForm = {
    detailsForm: UseFormReturn<IUserDetails>,
    educationForm: UseFormReturn<IUserEducation>,
};

export const MultiStepFormContext = React.createContext<MultiStepForm | null>(null);

export const useMultiStepFormContext = () => {
    const context = React.useContext<MultiStepForm>(
        (MultiStepFormContext as unknown) as React.Context<MultiStepForm>
    );

    if (!context) {
        throw new Error('useFormContext must be used within a StoreProvider.');
    }

    return context;
};
