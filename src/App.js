import "./App.css";
import "./MyComponents/Loginpage";
import Dashboard from "./MyComponents/Dashboard";
import Loginpage from "./MyComponents/Loginpage";
import Signup from "./MyComponents/Signup";
import Addpatient from "./MyComponents/Addpatient";
import Addstaff from "./MyComponents/Addstaff";
import Viewstaff from "./MyComponents/Viewstaff";
import ManageEmergency from "./MyComponents/ManageEmergency";
import Requests from "./MyComponents/Request";
import ManageRooms from "./MyComponents/ManageRooms";
import ManageMedicines from "./MyComponents/ManageMedicines";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointments from "./MyComponents/appointments";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Loginpage />} />
        <Route exact path="/Addpatient" element={<Addpatient />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Addstaff" element={<Addstaff />} />
        <Route exact path="/Viewstaff" element={<Viewstaff />} />
        <Route exact path="/ManageEmergency" element={<ManageEmergency />} />
        <Route exact path="/ManageMedicines" element={<ManageMedicines />} />
        <Route exact path="/ManageRooms" element={<ManageRooms />} />
        <Route exact path="/appointments" element={<Appointments />} />
      </Routes>
    </BrowserRouter>
    // <Loginpage></Loginpage>
  );
}

export default App;
