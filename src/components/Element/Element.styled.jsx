import styled from '@emotion/styled';

export const El = styled.li`
display:flex;
flex-direction:column;
align-items:center;
width:50px;
background-color: ${function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }}

`;