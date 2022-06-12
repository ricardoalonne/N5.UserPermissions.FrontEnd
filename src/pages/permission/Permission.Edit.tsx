import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { PermissionRequest } from "../../models/permission.model";
import Validation from "../../config/validationConfig";
import * as PermissionApi from "./consumeApi/PermissionApi";
import FormPermission from "./components/FormPermission";

Validation();

const Edit = () => {
  const history = useHistory();
  const { id }: any = useParams();

  const [initialValues, setInitialValues] = useState<PermissionRequest>();

  useEffect(() => {
    const mapperToRequest = async () => {
      const permission = await PermissionApi.getById(id);
      return {
        id: permission.id,
        employeeName: permission.employeeName,
        employeeLastName: permission.employeeLastName,
        permissionTypeId: permission.permissionType.id,
        permitDate: new Date(permission.permitDate.toString()),
        isActive: true,
      };
    };

    const getPermission = async () => {
      setInitialValues(await mapperToRequest());
    };
    getPermission();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-content-normal mt-3">
        <h1>Editar Permiso</h1>
        <Breadcrumb className="mt-3">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/permissions">Permisos</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="fw-bolder" active>
            Editar Permiso
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      {initialValues ? (
        <FormPermission
          key="permission-edit-form"
          isEditing={true}
          model={initialValues}
          onSubmit={(values) => {
            let response = false;
            const putPermission = async () => {
              response = await PermissionApi.put(values);
              if (response) history.push("/permissions");
              else history.push(`/permission/edit/${id}`);
            };
            putPermission();
          }}
        />
      ) : null}
    </>
  );
};

export default Edit;
