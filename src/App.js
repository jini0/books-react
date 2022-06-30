//쌤이하신거!
import './App.css';
//터미널에서 yarn add styled-components 해줘야함
import styled from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';
import { BookProvider } from './context/BookContext';

const ContainerDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <BookProvider>
    <div className="App">
        <ContainerDiv>
          <Header />
          <Content />
        </ContainerDiv>
    </div>
    </BookProvider>
  );
}

export default App;
