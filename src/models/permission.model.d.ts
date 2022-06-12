import { PermissionTypeResponse } from "./permissionType.model";

export interface PermissionResponse{
    id: number;
    employeeName: string;
    employeeLastName: string;
    permissionType: PermissionTypeResponse;
    permitDate: Date,
    isActive: boolean,
}

export interface PermissionRequest{
    id: number;
    employeeName: string;
    employeeLastName: string;
    permissionTypeId: number;
    permitDate: Date,
    isActive: boolean,
}