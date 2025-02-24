import { setAllAppliedJobs } from "@/redux/jobSlice";
import { axiosInstance } from "@/utils/axios";
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchAppliedJobs = async () => {
            try {
                const res = await axiosInstance.get('/application/get');
                if(res.data.success){
                    dispatch(setAllAppliedJobs(res.data.application));
                }
            } catch (error) {
                // Error handling is now managed by axios interceptor
                console.log(error);
            }
        }
        fetchAppliedJobs();
    },[])
};
export default useGetAppliedJobs;