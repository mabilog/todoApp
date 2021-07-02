import styled from 'styled-components';

import {TextField} from '@material-ui/core'

function App() {
  return (
    <AppWrapper>
      <Title>Angelo's Todo App Powered by ⚛React and 🔥Firebase! </Title>
      <TextField id="standard-basic" label="Todo" style={{width: '100%', maxWidth: '300px'}}/>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Title = styled.h1`
  font-size: 24px;
  width: 100%;
  max-width: 400px;
`;

export default App;
