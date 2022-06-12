const apiUrl = process.env.REACT_APP_API_URL;
export const swaggerUrl = apiUrl?.replace("api","swagger/index.html");
export const urlPermission = `${apiUrl}/Permission/`;
export const urlPermissionType = `${apiUrl}/PermissionType/`;