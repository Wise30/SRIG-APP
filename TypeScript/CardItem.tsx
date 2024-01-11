import {FunctionComponent} from "react";
import styled from "styled-components";

const CardBackground = styled.ImageBackground`
    height: 75%;
    width: 1px;
    resize-mode: cover;
    background-color: "#fff";
    border-radius: 25px;
    margin-right: 25px;
    overflow: hidden;
`;

const CardTouchable = styled.TouchableHighlight `
    height: 100%;
    border-radius: 25px;
`;

const TouchableView = styled.View`
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    flex: 1;
`;

const CardRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width 100%;
`;

const Logo = styled.Image`
    width: 100%;
    heigth 80%;
    resize-mode: contain;
    flex: 1;
`;

import { CardProps } from "./typeID";

const CardItem : FunctionComponent<CardProps> = (props) => {
    return (
        <CardBackground source={}>
            <CardTouchable >

            </CardTouchable>
        </CardBackground>
    );
};

export default CardItem;