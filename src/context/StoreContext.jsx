import React, { createContext, useEffect, useState } from 'react';
import { get } from '../services/api';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [staff, setStaff] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const staffData = await get("/staff");
        const roomsData = await get("/hotel/rooms");
        setStaff(staffData);
        setRooms(roomsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <StoreContext.Provider value={{ staff, rooms, loading, error }}>
      {children}
    </StoreContext.Provider>
  );
};