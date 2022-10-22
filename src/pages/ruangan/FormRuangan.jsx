import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import {
  createRuangan,
  getRuanganByID,
  updateRuangan,
} from "../api/RuanganAPI.js";
import { getBeacon } from "../api/BeaconAPI";
import PageTitle from "../../components/Typography/PageTitle";
import { Input, Label, Select } from "@windmill/react-ui";
import { useHistory, useParams } from "react-router-dom";

function FormRuangan() {
  const page = "ruangan";

  let history = useHistory();
  const { ruangan_id } = useParams();
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [payload, setPayload] = useState({
    beacon_id: "",
    name: "",
    room_code: "",
    location: "",
    description: "",
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
      res = await createRuangan(payload);
    } else {
      delete payload?.created_at;
      delete payload?.updated_at;

      res = await updateRuangan(ruangan_id, payload);
    }

    if (res?.status === 201 || res?.status === 200)
      history.push(`/app/${page}`);
  };

  const getDataByID = async () => {
    const res = await getRuanganByID(ruangan_id);
    setPayload(res);
  };

  const getBeaconData = async () => {
    const res = await getBeacon();
    setData(res);
  };

  const checkID = () => {
    if (ruangan_id !== undefined) {
      setIsEditing(true);
      getDataByID();
    }
  };

  useEffect(() => {
    checkID();
    getBeaconData();
  }, []);

  return (
    <>
      <PageTitle>
        <p className="capitalize">{page}</p>
      </PageTitle>

      <form method="post" onSubmit={(event) => submitHandler(event)}>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <Label className="mt-4" name="beacon_id">
            <span>Pilih Beacon</span>
            <Select
              className="mt-1 mb-3"
              onChange={(event) => updatePayload(event)}
              name="beacon_id"
            >
              {/* {data.map((item, i) => {
                return <option key={i}>{item?.proximity_uuid}</option>;
              })} */}
              {data?.map((item, i) => (
                <option
                  value={item?.beacon_id}
                  key={i}
                  selected={item?.beacon_id === payload?.beacon_id}
                >
                  {item?.proximity_uuid}
                </option>
              ))}
            </Select>
          </Label>
          <Label>
            <span>Nama Ruangan</span>
            <Input
              type="text"
              required
              className="mt-1 mb-3"
              name="name"
              defaultValue={payload?.name}
              onChange={(event) => updatePayload(event)}
            />
          </Label>
          <Label>
            <span>Kode Ruangan</span>
            <Input
              type="text"
              required
              className="mt-1 mb-3"
              name="room_code"
              defaultValue={payload?.room_code}
              onChange={(event) => updatePayload(event)}
            />
          </Label>
          <Label>
            <span>Lokasi</span>
            <Input
              type="text"
              required
              className="mt-1 mb-3"
              name="location"
              defaultValue={payload?.location}
              onChange={(event) => updatePayload(event)}
            />
          </Label>
          <Label>
            <span>Deskripsi</span>
            <Input
              type="text"
              required
              className="mt-1 mb-3"
              name="description"
              defaultValue={payload?.description}
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

export default FormRuangan;
