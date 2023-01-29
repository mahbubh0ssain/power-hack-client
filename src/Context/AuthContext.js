import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const USER_CONTEXT = createContext();

const AuthContext = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [billings, setBillings] = useState([]);
  const [editBill, setEditBill] = useState({});
  const [modalOpen, setModalOpen] = useState(true);
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPageData, setPerPageData] = useState(10);
  const [totalPaid, setTotalPaid] = useState(0);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/billing-list?search=${search}&page=${currentPage}&perPage=${perPageData}`
      )
      .then((res) => {
        if (res?.data?.result?.length) {
          setLoading(false);
          setRefresh(!refresh);
          setModalOpen(true);
          setCount(res?.data?.count);
          setBillings(res?.data?.result);
        }
      });
  }, [refresh, loading, search, currentPage, perPageData]);

  const numberOfPages = Math.ceil(count / perPageData);

  const value = {
    setEditBill,
    loading,
    refresh,
    setRefresh,
    setModalOpen,
    editBill,
    setLoading,
    setBillings,
    billings,
    modalOpen,
    setSearch,
    count,
    numberOfPages,
    setCurrentPage,
    currentPage,
    token,
    setToken,
    totalPaid,
    setTotalPaid,
  };

  return (
    <USER_CONTEXT.Provider value={value}>{children}</USER_CONTEXT.Provider>
  );
};

export default AuthContext;
