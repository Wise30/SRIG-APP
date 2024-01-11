import { ImageSourcePropType } from "react-native";

export interface CardProps {
    id: number;
    acountNo: string;
    balance: number;
    alias?: string;
    logo: ImageSourcePropType;
}

export interface CardSectionProps {
    data: Array<CardProps>;
}