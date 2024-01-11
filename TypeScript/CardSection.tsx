import React, { FunctionComponent } from "react";
import styled from "styled-components";

//components
const CardList = styled.FlatList `
    width: 100%;
    flex: 1;
    paddingLeft: 25px;
    paddingBottom: 15px;
`;
import { CardSectionProps } from "./typeID";

const CardSection: FunctionComponent = (props) => {
    return (
        <CardList
            data={props.data}
            horizontal={true}
            showsHorizotalScrollIndicator={false}
            contentContainerStyle={{
                paddingRight: 25,
                alignItems: 'center',
            }}
            keyExtractor={({ id }: any) => id.toString()}
            renderItem={}
        />
    );
};


export default CardSection;