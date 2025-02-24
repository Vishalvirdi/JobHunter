import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div 
            onClick={() => navigate(`/description/${job._id}`)} 
            className='p-6 rounded-lg shadow-md hover:shadow-xl bg-white border border-gray-100 
                cursor-pointer transition-all duration-300 hover:border-blue-200 hover:scale-[1.02]'
        >
            <div className='flex justify-between items-start mb-4'>
                <div>
                    <h1 className='font-semibold text-xl text-gray-800 hover:text-blue-600 transition-colors'>
                        {job?.company?.name}
                    </h1>
                    <p className='text-sm text-gray-500 flex items-center gap-1'>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        India
                    </p>
                </div>
            </div>

            <div className='space-y-3'>
                <h1 className='font-bold text-xl text-gray-900'>{job?.title}</h1>
                <p className='text-sm text-gray-600 line-clamp-2 hover:line-clamp-none transition-all duration-300'>
                    {job?.description}
                </p>
            </div>

            <div className='flex flex-wrap items-center gap-2 mt-5'>
                <Badge className='text-blue-700 font-semibold bg-blue-50 hover:bg-blue-100 transition-colors' 
                    variant="ghost">
                    {job?.position} Positions
                </Badge>
                <Badge className='text-[#F83002] font-semibold bg-red-50 hover:bg-red-100 transition-colors' 
                    variant="ghost">
                    {job?.jobType}
                </Badge>
                <Badge className='text-[#7209b7] font-semibold bg-purple-50 hover:bg-purple-100 transition-colors' 
                    variant="ghost">
                    {job?.salary} LPA
                </Badge>
            </div>
        </div>
    )
}

export default LatestJobCards