import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody } from "reactstrap";
import { PermissionResponse } from "../../models/permission.model";
import * as PermissionApi from "./consumeApi/PermissionApi";

const Detail = () => {
  const { id }: any = useParams();

  const [permission, setPermission] = useState<PermissionResponse>();

  useEffect(() => {
    const getPermission = async () => {
      setPermission(await PermissionApi.getById(id));
    };
    getPermission();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-content-normal mt-3">
        <h1>Detalles de Permiso</h1>
        <Breadcrumb className="mt-3">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/permissions">Permisos</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="fw-bolder" active>
            Detalles de Permiso
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      {permission ? (
        <Card className="round">
          <CardBody>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Nombre de Empleado</label>
                  <input
                    type="text"
                    className="form-control round"
                    value={permission?.employeeName}
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Apellido de Empleado</label>
                  <input
                    type="text"
                    className="form-control round"
                    value={permission?.employeeLastName}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="form-label">Tipo de Permiso</label>
                  <input
                    type="text"
                    className="form-control round"
                    value={permission?.permissionType.description}
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  {" "}
                  <label className="form-label">Fecha del Permiso</label>
                  <input
                    type="text"
                    className="form-control round"
                    value={permission?.permitDate.toString().replace("T", " ")}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <Link
                to="/permissions"
                className="btn btn-secondary rounded-pill"
              >
                Volver a Bandeja
              </Link>
              <Link
                to={`/permissions/edit/${id}`}
                className="btn btn-primary rounded-pill"
              >
                Editar
              </Link>
            </div>
          </CardBody>
        </Card>
      ) : null}
    </>
  );
};

export default Detail;
