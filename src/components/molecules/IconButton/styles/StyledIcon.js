import styled from 'styled-components'; //css

const StyledPlus = styled.div`

    background-image: url('${({picto}) => picto}');
    background-repeat: no-repeat;
    background-size:contain;
    background-position:center;

    position:relative;
    width:25px;
    height:25px;
    margin-right: 10px;
    z-index:1;

    ::after{
        background-image: url('${({picto}) => picto}');
        background-repeat: no-repeat;
        background-size:contain;
        background-position:center;
        
        transition: opacity 500ms;
        z-index:-1;
        content:"";
        position:absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        opacity:0;
       
    }
`;

export default StyledPlus;
