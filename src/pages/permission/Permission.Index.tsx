import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Table } from "reactstrap";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";
import * as PermissionApi from "./consumeApi/PermissionApi";
import { PermissionResponse } from "../../models/permission.model";

const Index = () => {
  const [permissions, setPermissions] = useState<PermissionResponse[]>();
  localStorage.setItem("currentUrl", window.location.href)

  useEffect(() => {
    const getPermission = async () => {
      setPermissions(await PermissionApi.get());
    };
    getPermission();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-content-normal mt-3">
        <h1>Permisos</h1>
        <Breadcrumb className="mt-3">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem className="fw-bolder" active>
            Permisos
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="d-flex flex-wrap align-items-flex-start mb-2 bg-white p-2 round-3">
        <Link
          to="/permissions/request"
          className="btn btn-primary rounded-pill"
        >
          <span className="btn-label">
            <FaIcons.FaPlusCircle className="me-2" />
            Solicitar Permiso
          </span>
        </Link>
      </div>
      <Table bordered responsive size="">
        <thead>
          <tr>
            <th>Nombre de Empleado</th>
            <th>Apellido de Empleado</th>
            <th>Tipo de Permiso</th>
            <th>Día de Permiso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {permissions?.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.employeeName}</td>
              <td>{permission.employeeLastName}</td>
              <td>{permission.permissionType.description}</td>
              <td>{permission.permitDate.toString().replace("T", " ")}</td>
              <td>
                <Link
                  to={`/permissions/detail/${permission.id}`}
                  className="btn btn-primary btn-action"
                >
                  <FaIcons.FaEye />
                </Link>
                <Link
                  to={`/permissions/edit/${permission.id}`}
                  className="btn btn-primary btn-action"
                >
                  <FaIcons.FaEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Index;
