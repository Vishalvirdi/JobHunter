import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom';
import { axiosInstance } from '@/utils/axios';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const JobDescription = () => {
    const {singleJob} = useSelector(store => store.job);
    const {user} = useSelector(store=>store.auth);
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();

    const applyJobHandler = async () => {
        try {
            const res = await axiosInstance.get(`/application/apply/${jobId}`);
            
            if(res.data.success){
                setIsApplied(true);
                const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
                dispatch(setSingleJob(updatedSingleJob));
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        const fetchSingleJob = async () => {
            try {
                const res = await axiosInstance.get(`/job/get/${jobId}`);
                if(res.data.success){
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob(); 
    },[jobId,dispatch, user?._id]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='max-w-7xl mx-auto my-10 p-6'
        >
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='bg-white rounded-xl shadow-lg p-6 mb-8'
            >
                <div className='flex items-center justify-between flex-wrap gap-4'>
                    <div>
                        <motion.h1 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className='font-bold text-2xl text-[#7209b7]'
                        >{singleJob?.title}</motion.h1>
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className='flex items-center gap-2 mt-4 flex-wrap'
                        >
                            <Badge className={'text-blue-700 font-bold hover:bg-blue-100'} variant="ghost">{singleJob?.postion} Positions</Badge>
                            <Badge className={'text-[#F83002] font-bold hover:bg-red-100'} variant="ghost">{singleJob?.jobType}</Badge>
                            <Badge className={'text-[#7209b7] font-bold hover:bg-purple-100'} variant="ghost">{singleJob?.salary}LPA</Badge>
                        </motion.div>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            onClick={isApplied ? null : applyJobHandler}
                            disabled={isApplied}
                            className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}
                        >
                            {isApplied ? 'Already Applied' : 'Apply Now'}
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='bg-white rounded-xl shadow-lg p-6'
            >
                <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className='text-xl font-bold text-[#7209b7] mb-6 pb-4 border-b-2 border-gray-200'
                >
                    Job Description
                </motion.h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {[
                        { label: 'Role', value: singleJob?.title, icon: '👨‍💼' },
                        { label: 'Location', value: singleJob?.location, icon: '📍' },
                        { label: 'Experience', value: singleJob?.experience === 0 ? 'For Fresher' : (singleJob?.experience !== undefined ? `${singleJob.experience} yrs` : 'Not specified'), icon: '⏳' },
                        { label: 'Salary', value: `${singleJob?.salary}LPA`, icon: '💰' },
                        { label: 'Total Applicants', value: singleJob?.applications?.length, icon: '👥' },
                        { label: 'Posted Date', value: singleJob?.createdAt.split("T")[0], icon: '📅' },
                    ].map((item, index) => (
                        <motion.div 
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                            className='bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow'
                        >
                            <div className='flex items-center gap-3'>
                                <span className='text-xl'>{item.icon}</span>
                                <div>
                                    <p className='text-gray-600 text-sm'>{item.label}</p>
                                    <p className='font-semibold text-gray-900'>{item.value}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                    className='mt-6 bg-gray-50 p-4 rounded-lg'
                >
                    <div className='flex items-center gap-3 mb-2'>
                        <span className='text-xl'>📝</span>
                        <p className='text-gray-600 text-sm'>Description</p>
                    </div>
                    <p className='text-gray-900'>{singleJob?.description}</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default JobDescription