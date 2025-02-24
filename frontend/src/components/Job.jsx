import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = ({job}) => {
    const navigate = useNavigate();
    // const jobId = "lsekdhjgdsnfvsdkjf";

    const daysAgoFunction = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const currentTime = new Date();
        const timeDifference = currentTime - createdAt;
        return Math.floor(timeDifference/(1000*24*60*60));
    }
    
    return (
        <div className='p-6 rounded-xl shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500 font-medium'>{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
                <Button 
                    variant="ghost" 
                    className="rounded-full hover:bg-pink-50 hover:text-pink-500 transition-colors" 
                    size="icon"
                >
                    <Bookmark className="h-5 w-5" />
                </Button>
            </div>

            <div className='flex items-center gap-4 my-4'>
                <Avatar className="h-14 w-14 ring-2 ring-gray-100">
                    <AvatarImage src={job?.company?.logo} />
                </Avatar>
                <div>
                    <h1 className='font-semibold text-lg text-gray-900'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500 flex items-center gap-1'>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> India
                    </p>
                </div>
            </div>

            <div className='space-y-3'>
                <h1 className='font-bold text-xl text-gray-900'>{job?.title}</h1>
                <p className='text-sm leading-relaxed text-gray-600'>{job?.description}</p>
            </div>

            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='bg-blue-50 text-blue-700 font-medium hover:bg-blue-100' variant="secondary">
                    {job?.position} Positions
                </Badge>
                <Badge className='bg-red-50 text-[#F83002] font-medium hover:bg-red-100' variant="secondary">
                    {job?.jobType}
                </Badge>
                <Badge className='bg-purple-50 text-[#7209b7] font-medium hover:bg-purple-100' variant="secondary">
                    {job?.salary} LPA
                </Badge>
            </div>

            <div className='flex items-center gap-3 mt-6'>
                <Button 
                    onClick={()=> navigate(`/description/${job?._id}`)} 
                    variant="outline"
                    className="flex-1 hover:bg-gray-100"
                >
                    View Details
                </Button>
                <Button 
                    className="flex-1 bg-[#7209b7] hover:bg-[#5a0791] transition-colors"
                >
                    Save For Later
                </Button>
            </div>
        </div>
    )
}

export default Job