import styled from 'styled-components'


export const Wrapper = styled.div`
   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid lightcoral;
    border-radius: 20px;
    align-items: center;
    img{
        max-height: 250px;
        aspect-ratio: 1/1;
        align-self: center;
        padding: 10px;
       border-radius: 20px 20px 0 0;
    }
    .details{
      
        height: 100%;
        justify-content: space-between;
        padding:1rem;
        display: flex;
       align-items:center ;
        flex-direction: column;
        
    }
    button{
        border-radius: 0 0 20px 20px;
    }
`;
