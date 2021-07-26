import styled from 'styled-components'

export const Wrapper = styled.aside`
padding: 30px;
display: flex;
flex-direction: column;
align-items: center;
width:30vw;
.cart-item{
    display: flex;
    justify-content: space-between;
    @media (max-width:700px){
        flex-direction: column-reverse;
    }
    margin: 30px 0;
    .details{
        .MuiIconButton-label {
            font-size: 50px;
    }}
    img{
        max-width: 40%;
       
        margin-left: 20px;
        aspect-ratio: 1/1;
    }
}
`;