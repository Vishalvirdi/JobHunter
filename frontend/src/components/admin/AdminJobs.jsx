import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button' 
import { useNavigate } from 'react-router-dom' 
import { useDispatch } from 'react-redux' 
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'
import { Loader2 } from 'lucide-react'

const AdminJobs = () => {
  const { data, isLoading, isError, error } = useGetAllAdminJobs() || {};
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-gradient-xy">
      <Navbar />
      <div className='max-w-6xl mx-auto my-10'>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between my-5'>
          <div className='relative w-full sm:w-fit'>
            <Input
              className="w-full sm:w-[300px]"
              placeholder="Search jobs by name or role..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            {input && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                onClick={() => setInput("")}
              >
                ×
              </button>
            )}
          </div>
          <Button 
            onClick={() => navigate("/admin/jobs/create")}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading...
              </>
            ) : (
              'Create New Job'
            )}
          </Button>
        </div>

        {isError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            Error loading jobs: {error?.message || 'Something went wrong'}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        ) : (
          <AdminJobsTable />
        )}
      </div>
    </div>
  )
}

export default AdminJobs