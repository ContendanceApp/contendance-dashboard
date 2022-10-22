import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { createRoles, getRolesByID, updateRoles } from "../api/RolesAPI.js";
import PageTitle from "../../components/Typography/PageTitle";
import { Input, Label, Select } from "@windmill/react-ui";
import { useHistory, useParams } from "react-router-dom";
import { getRoles } from "@testing-library/react";

function FormRoles() {
  const page = "roles";

  let history = useHistory();
  const { role_id } = useParams();
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [payload, setPayload] = useState({
    role: "",
  });

  const updatePayload = (event) => {
    if (event.target.name === "beacon_id")
      setPayload({
        ...payload,
        [event.target.name]: parseInt(event.target.value),
      });
    else
      setPayload({
        ...payload,
        [event.target.name]: event.target.value,
      });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    let res = null;

    if (!isEditing) {
      res = await createRoles(payload);
    } else {
      delete payload?.created_at;
      delete payload?.updated_at;

      res = await updateRoles(role_id, payload);
    }

    if (res?.status === 201 || res?.status === 200)
      history.push(`/app/${page}`);
  };

  const getDataByID = async () => {
    const res = await getRolesByID(role_id);
    setPayload(res);
  };

  const checkID = () => {
    if (role_id !== undefined) {
      setIsEditing(true);
      getDataByID();
    }
  };

  useEffect(() => {
    checkID();
  }, []);

  return (
    <>
      <PageTitle>
        <p className="capitalize">{page}</p>
      </PageTitle>

      <form method="post" onSubmit={(event) => submitHandler(event)}>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <Label>
            <span>Nama Roles</span>
            <Input
              type="text"
              required
              className="mt-1 mb-3"
              name="role"
              defaultValue={payload?.role}
              onChange={(event) => updatePayload(event)}
            />
          </Label>
        </div>
        <div className="flex justify-end">
          <Button type="submit" text={isEditing ? "Simpan" : "Tambah"} />
        </div>
      </form>
    </>
  );
}

export default FormRoles;
