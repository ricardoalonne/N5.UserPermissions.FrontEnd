import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { Button, Card, CardBody } from "reactstrap";
import { PermissionRequest } from "../../../models/permission.model";
import * as Yup from "yup";
import RaTextField from "../../../components/RaTextField";
import RaDateField from "../../../components/RaDateField";
import RaSelectField from "../../../components/RaSelectField";
import { PermissionTypeResponse } from "../../../models/permissionType.model";
import { useEffect, useState } from "react";
import * as PermissionTypeApi from "../../permissionType/consumeApi/PermissionTypeApi";

interface formPermissionProps {
  model: PermissionRequest;
  onSubmit(
    values: PermissionRequest,
    action: FormikHelpers<PermissionRequest>
  ): void;
  isEditing: boolean;
}

const FormPermission = (props: formPermissionProps) => {
  const [permissionTypes, setPermissionTypes] =
    useState<PermissionTypeResponse[]>();

  useEffect(() => {
    const getPermissionTypes = async () => {
      setPermissionTypes(await PermissionTypeApi.get());
    };
    getPermissionTypes();
  }, []);

  const optionsTypes = permissionTypes
    ? permissionTypes.map((type) => ({
        key: type.id.toString(),
        value: type.id,
        name: type.description,
      }))
    : [];

  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        employeeName: Yup.string()
          .required("Este campo es requerido.")
          .firstCapitalLetter(),
        employeeLastName: Yup.string()
          .required("Este campo es requerido.")
          .firstCapitalLetter(),
        permissionTypeId: Yup.string()
          .required("Este campo es requerido.")
          .ignoreNullOrZeroValue(),
        permitDate: Yup.string().required("Este campo es requerido."),
      })}
    >
      {(formikProps) => (
        <Form>
          <Card className="round">
            <CardBody>
              <div className="row">
                <div className="col-md-6">
                  <RaTextField
                    field="employeeName"
                    label="Nombre de Empleado"
                    placeholder="Nombre de Empleado"
                  />
                </div>
                <div className="col-md-6">
                  <RaTextField
                    field="employeeLastName"
                    label="Apellido de Empleado"
                    placeholder="Apellido de Empleado"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <RaSelectField
                    field="permissionTypeId"
                    label="Tipo de Permiso"
                    placeholder="Seleccione un tipo de permiso..."
                    options={optionsTypes}
                  />
                </div>
                <div className="col-md-6">
                  <RaDateField field="permitDate" label="Fecha del Permiso" />
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <Link to="/permissions" className="btn btn-danger rounded-pill">
                  Cancelar
                </Link>
                <Button
                  className="btn btn-success rounded-pill"
                  disabled={formikProps.isSubmitting}
                  type="submit"
                >
                  {props.isEditing ? "Editar" : "Registrar"}
                </Button>
              </div>
            </CardBody>
          </Card>
        </Form>
      )}
    </Formik>
  );
};

export default FormPermission;
