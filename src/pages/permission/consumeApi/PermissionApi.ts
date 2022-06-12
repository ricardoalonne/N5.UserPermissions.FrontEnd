import axios, { AxiosResponse } from "axios";
import { urlPermission } from "../../../config/endpointsConfig";
import {
  PermissionRequest,
  PermissionResponse,
} from "../../../models/permission.model";

export const get = async () => {
  let permissions: PermissionResponse[] = [];
  await axios
    .get(urlPermission)
    .then((response: AxiosResponse<PermissionResponse[]>) => {
      permissions = response.data;
    })
    .catch((error) =>
      console.error("Error al obtener datos de Permissions. Detalles: ", error.toString())
    );
  return permissions;
};

export const getById = async (id: number) => {
  let permissions: PermissionResponse = {
    id: 0,
    employeeName: "",
    employeeLastName: "",
    permissionType: {
      id: 0,
      description: "",
      isActive: true,
    },
    permitDate: new Date(Date.now()),
    isActive: true,
  };
  await axios
    .get(`${urlPermission}${id}`)
    .then((response: AxiosResponse<PermissionResponse>) => {
      permissions = response.data;
    })
    .catch((error) =>
      console.error("Error al consultar datos del Permission. Detalles: ", error.toString())
    );
  return permissions;
};

export const post = async (permission: PermissionRequest) => {
  let result = false;
  await axios
    .post(urlPermission, permission)
    .then((response: AxiosResponse<PermissionRequest>) => {
      result = response.status === 200 || response.status === 201 || response.status === 204;
    })
    .catch((error) =>
      console.error("Error al solicitar un Permission. Detalles: ", error.toString())
    );
  return result;
};

export const put = async (permission: PermissionRequest) => {
  let result = false;
  await axios
    .put(`${urlPermission}${permission.id}`, permission)
    .then((response: AxiosResponse<PermissionRequest>) => {
      result = response.status === 200 || response.status === 201 || response.status === 204;
    })
    .catch((error) =>
      console.error("Error al modificar un Permission. Detalles: ", error.toString())
    );
  return result;
};
