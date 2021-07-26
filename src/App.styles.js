import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'

export const Wrapper = styled.div`
    user-select:none;
    font-family: sans-serif;
    padding: 50px;
    >button{
        font-size: 40px;
    }
`;
export const Grid = styled.div`
    
   
    display:grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index:1;
    right:20px;
    top:20px;
`;