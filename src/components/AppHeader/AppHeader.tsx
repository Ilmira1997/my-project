import { SCAppHeader } from "./AppHeader.style";

interface IAppHeader {
    headerType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    headerText: string,
}

export const AppHeader = ({ headerText, headerType }: IAppHeader) => {
    const renderAppHeader = () => {
        switch (headerType) {
            case "h1":
                return <h1>{headerText}</h1>;
            case "h3":
                return <h3>{headerText}</h3>;
            case "h4":
                return <h4>{headerText}</h4>;
            case "h5":
                return <h5>{headerText}</h5>;
            case "h6":
                return <h6>{headerText}</h6>;

            default:
                return <SCAppHeader>{headerText}</SCAppHeader>;

        }

    };
    return renderAppHeader();
};
