import React, { useEffect, useState } from "react";
import Sidebar from "../../../layout/sidebar";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaBookOpen } from "react-icons/fa";
import axios from "axios";

const Kurikulums = () => {
  const [datas, setDatas] = useState(null);
  const breadcrumbs = ["Data Table", "Doc Mahasiswa", "Kurikulum"];

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const { data } = await axios.get(
          "https://knowledgeable-painted-guarantee.glitch.me/kurikulums"
        );
        setDatas(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDatas();
  }, []);

  return (
    <Sidebar breadcrumbs={breadcrumbs}>
      <Flex className="h-fit flex-col gap-3">
        <Box className="bg-secondaryGray-300 rounded-xl py-5 px-10">
          <h2 className="flex items-center gap-2 font-semibold text-xl">
            <FaBookOpen className="text-brandTabs-300" /> Kurikulums
          </h2>
        </Box>
        <Box className="bg-secondaryGray-300 rounded-xl">
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Copyright Manajemen Informatika</TableCaption>
              <Thead>
                <Tr>
                  <Th textAlign="center">No</Th>
                  <Th textAlign="center">ID</Th>
                  <Th textAlign="center">Mata Kuliah</Th>
                  <Th textAlign="center">SKS</Th>
                  <Th textAlign="center">T/P</Th>
                  <Th textAlign="center">Semester</Th>
                </Tr>
              </Thead>
              <Tbody>
                {datas ? (
                  datas.map((data, index) => {
                    return (
                      <Tr key={index}>
                        <Td textAlign="center">{index + 1}</Td>
                        <Td textAlign="center">{data.id}</Td>
                        <Td>{data.matkul}</Td>
                        <Td textAlign="center">{data.sks}</Td>
                        <Td textAlign="center">{data.tp ? "T" : "P"}</Td>
                        <Td textAlign="center">{data.semester}</Td>
                      </Tr>
                    );
                  })
                ) : (
                  <Tr>
                    <Td>
                      <p className="px-10">Loading Data...</p>
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Sidebar>
  );
};

export default Kurikulums;
