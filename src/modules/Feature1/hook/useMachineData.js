import axios from "axios";
import { useEffect, useState } from "react";

const useMachineData = ()=>{
    const [machineData, setMachineData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const res = await axios.get("http://localhost:3000/machine")
                setMachineData(res.data)
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    return {machineData,loading}
};

export default useMachineData;