import { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios"
import { uri } from "../data/api"

const serviceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([])
  const getServices = async () => {
    const res = await axios.get(uri + "/service/getall");
      setServices(res.data);
  }

  useEffect(() => {
    getServices();
  }, [])

  return (
    <serviceContext.Provider value={{services}}>
      {children}
    </serviceContext.Provider>
  )
};

export default ServiceProvider

export const useServices = () => {
  const context = useContext(serviceContext);
  if (!context) {
    throw new Error("useServices must be used within a ServiceProvider");
  }
  return context;
}