import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResultScreen } from "./screens/result";
import { Search } from "./screens/search";

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}/>
        <Route path="/result" element={<ResultScreen />} />
      </Routes>
    </BrowserRouter>
  )

}


