import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from './ts/recoil';

// Components
import { Main } from './components/main/Main';

function App() {
  console.log("발동");
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
