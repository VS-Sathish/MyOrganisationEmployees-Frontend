import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Core/Header";
import AddEmployee from "./Components/Core/AddEmployee";
import UpdateEmployee from "./Components/Core/UpdateEmployee";
import EmployeeList from "./Components/Core/EmployeeList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="employees/list" element={<EmployeeList />} />
          <Route path="employees/add" element={<AddEmployee />} />
          <Route path="employees/:empID/update" element={<UpdateEmployee />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
