import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageTitle from "../../components/Typography/PageTitle";

import {
  Table,
  TableHeader,
  TableCell,
  TableBody,
  TableRow,
  TableFooter,
  TableContainer,
  Button,
  Pagination,
} from "@windmill/react-ui";

import { EditIcon, TrashIcon } from "../../icons";
import { getBeacon, deleteBeacon } from "../api/BeaconAPI";

function Beacon() {
  const [pageTable2, setPageTable2] = useState(1);
  const [dataTable2, setDataTable2] = useState([]);
  const [data, setData] = useState([]);

  const resultsPerPage = 10;
  const totalResults = data?.length;

  const page = "beacon";

  const getData = async () => {
    const res = await getBeacon();
    setData(res);
  };

  const deleteData = async (id) => {
    const res = await deleteBeacon(id);
    if (res?.status === 200) getData();
  };

  function onPageChangeTable2(p) {
    setPageTable2(p);
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setDataTable2(
      data?.slice(
        (pageTable2 - 1) * resultsPerPage,
        pageTable2 * resultsPerPage
      )
    );
  }, [pageTable2]);

  return (
    <>
      <div className="flex justify-between items-center">
        <PageTitle>
          <p className="capitalize">{page}</p>
        </PageTitle>
        <Button tag={Link} to={`${page}/tambah`}>
          <span className="capitalize">Tambah {page}</span>
        </Button>
      </div>

      {/* <CTA /> */}
      <TableContainer className="mb-8">
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Proximity UUID</TableCell>
              <TableCell>Major</TableCell>
              <TableCell>Minor</TableCell>
              <TableCell>Ruangan</TableCell>
              <TableCell>Actions</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data?.map((item, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <div>
                      <p className="font-semibold">{item?.proximity_uuid}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{item?.major}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{item?.minor}</span>
                </TableCell>
                <TableCell>
                  <span className="text-sm">-</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-4">
                    <Button
                      tag={Link}
                      layout="link"
                      size="icon"
                      aria-label="Edit"
                      to={`${page}/edit/${item?.beacon_id}`}
                    >
                      <EditIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                    <Button
                      layout="link"
                      size="icon"
                      aria-label="Delete"
                      onClick={() =>
                        window.confirm("yakin deck?")
                          ? deleteData(item?.beacon_id)
                          : ""
                      }
                    >
                      <TrashIcon className="w-5 h-5" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChangeTable2}
            label="Table navigation"
          />
        </TableFooter>
      </TableContainer>
    </>
  );
}

export default Beacon;
