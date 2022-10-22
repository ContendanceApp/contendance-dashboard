import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import { createBeacon, getBeaconByID, updateBeacon } from "../api/BeaconAPI.js";
import PageTitle from "../../components/Typography/PageTitle";
import { Input, Label } from "@windmill/react-ui";
import { useHistory, useParams } from "react-router-dom";

function FormBeacon() {
  const page = "beacon";
  let history = useHistory();
  const { beacon_id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [payload, setPayload] = useState({
    proximity_uuid: "",
    major: null,
    minor: null,
  });

  const updatePayload = (event) => {
    setPayload({
      ...payload,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    let res = null;

    if (!isEditing) {
      res = await createBeacon(payload);
    } else {
      delete payload?.created_at;
      delete payload?.updated_at;
      delete payload?.beacon_id;

      res = await updateBeacon(beacon_id, payload);
    }

    if (res?.status === 201 || res?.status === 200)
      history.push(`/app/${page}`);
  };

  const getDataByID = async () => {
    const res = await getBeaconByID(beacon_id);
    setPayload(res);
  };

  const checkID = () => {
    if (beacon_id !== undefined) {
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
      {/* <CTA /> */}
      <form method="post" onSubmit={(event) => submitHandler(event)}>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <Label>
            <span>Proximity UUID</span>
            <Input
              type="text"
              required
              className="mt-1 mb-3"
              name="proximity_uuid"
              defaultValue={payload.proximity_uuid}
              onChange={(event) => updatePayload(event)}
            />
          </Label>
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            <Label>
              <span>Major</span>
              <Input
                type="number"
                required
                className="mt-1 mb-3"
                name="major"
                defaultValue={payload.major}
                onChange={(event) => updatePayload(event)}
              />
            </Label>
            <Label>
              <span>Minor</span>
              <Input
                type="number"
                required
                className="mt-1 mb-3"
                name="minor"
                defaultValue={payload.minor}
                onChange={(event) => updatePayload(event)}
              />
            </Label>
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit" text={isEditing ? "Simpan" : "Tambah"} />
        </div>
      </form>
    </>
  );
}

export default FormBeacon;
