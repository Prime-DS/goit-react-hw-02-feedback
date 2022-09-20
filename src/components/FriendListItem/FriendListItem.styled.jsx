import styled from "@emotion/styled";

export const Friend = styled.li`
   
    display:flex;
    align-items: center;
    justify-content: center;
    
    margin: 5px;
    height:80px;
    list-style:none;
    border-radius:10px;
    background-color: #a89c329d;
`;

export const IsOnline = styled.span`
    width:25px;
    height:25px;
    border-radius:50%;
    background-color:${props => {
    switch (props.isOnline) {
        case true:
            return "#00db0b";
        default:
            return "red";
    }
    }};
`;

