import EditPerformance from "../../components/admin/editPerformance/EditPerformance";
import EditAudition from "../../components/admin/editAudition/EditAudition";
import EditEvent from "../../components/admin/editEvent/EditEvent";

function Admin() {
  return (
    <div>
      <EditEvent />
      <EditPerformance />
      <EditAudition />
    </div>
  );
}

export default Admin;
