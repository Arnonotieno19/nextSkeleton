

export const BottomContainer = styled.div`
  background: linear-gradient(to right, rgba(55,68,106,0.4), rgba(55,68,106,0.5));
  height: calc(75vh - 80px);

  padding: 0 15%;

  @media screen and (max-width:960px){
    padding: 0 2.5%;
  }
  
`;

export const BottomContent = styled.div`

  height: 100%;

`;

export const BottomItems = styled.div`
  
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100% ;
  color: #fff;
  line-height: 1;


`;

export const BottomH2 = styled.h1`
  
  font-size: 80px;
  font-family: 'Anton', sans-serif;
  letter-spacing: 3px;


  @media screen and (max-width : 960px){
    font-size: 36px;
  
  }

`;


export const Forward = styled.div`
  display: inline-block;
  font-style: italic;
  font-family: 'Anton', sans-serif;

  filter: blur(8px);

   
`

export const BottomP = styled.p`
  font-size: 30px;
  letter-spacing: 12px;

  @media screen and (max-width : 960px){
    font-size: 16px;
  }
  
`;


