import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const USER_CONTEXT = createContext();

const AuthContext = ({ children }) => {
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);
  const [billings, setBillings] = useState([]);
  const [editBill, setEditBill] = useState({});
  const [modalOpen, setModalOpen] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/billing-list?search=${search}`)
      .then((res) => {
        if (res?.data?.result?.length) {
          setLoading(false);
          setRefresh(!refresh);
          setModalOpen(true);
          setBillings(res?.data?.result);
        }
      });
  }, [refresh, loading, search]);


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
  };

  return (
    <USER_CONTEXT.Provider value={value}>{children}</USER_CONTEXT.Provider>
  );
};

export default AuthContext;
