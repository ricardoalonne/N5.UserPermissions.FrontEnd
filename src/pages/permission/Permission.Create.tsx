import { Link, useHistory } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { PermissionRequest } from "../../models/permission.model";
import Validation from "../../config/validationConfig";
import * as PermissionApi from "../permission/consumeApi/PermissionApi";
import FormPermission from "./components/FormPermission";

Validation();

const Create = () => {
  const history = useHistory();

  const initialValues: PermissionRequest = {
    id: 0,
    employeeName: "",
    employeeLastName: "",
    permissionTypeId: 0,
    // permitDate: new Date("2022-06-10T00:00:00"),
    permitDate: new Date(Date.now()),
    isActive: true,
  };

  return (
    <>
      <div className="d-flex justify-content-between align-content-normal mt-3">
        <h1>Solicitar Permiso</h1>
        <Breadcrumb className="mt-3">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/permissions">Permisos</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="fw-bolder" active>
            Solicitar Permiso
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <FormPermission
        key="permission-request-form"
        isEditing={false}
        model={initialValues}
        onSubmit={(values) => {
          let response = false;
          const postPermission = async () => {
            response = await PermissionApi.post(values);
            if (response) history.push("/permissions");
            else history.push("/permissions/request");
          };
          postPermission();
        }}
      />
    </>
  );
};

export default Create;
