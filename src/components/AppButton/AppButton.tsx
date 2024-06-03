import { SCAppButton } from "./AppButton.style";

interface IAppButton {
        buttonText:string,
        buttonType:"submit" | "button"
        isDisabled ?:boolean
    
}

export const AppButton = ({buttonText,buttonType,isDisabled}:IAppButton) => {
    return (
        <SCAppButton disabled={isDisabled} type={buttonType}>{buttonText}</SCAppButton>
    );
};
