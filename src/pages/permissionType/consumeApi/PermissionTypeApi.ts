import axios, {AxiosResponse} from 'axios'
import { urlPermissionType } from '../../../config/endpointsConfig';
import { PermissionTypeResponse } from '../../../models/permissionType.model';

export const get = async () =>{
    let permissionTypes: PermissionTypeResponse[] = [];
    await axios.get(urlPermissionType)
    .then((response: AxiosResponse<PermissionTypeResponse[]>) =>{
        permissionTypes = response.data;
    })
    .catch(error => console.error("Error en PermissionsTypes: ",error.toString()))
    return permissionTypes;
};