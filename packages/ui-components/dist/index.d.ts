/// <reference types="react" />
interface Props {
    text: string;
}
export declare const ExampleComponent: ({ text }: Props) => JSX.Element;
export declare const Button: {
    (props: any): JSX.Element;
    defaultProps: {
        onClick: () => void;
        label: string;
    };
};
export {};
