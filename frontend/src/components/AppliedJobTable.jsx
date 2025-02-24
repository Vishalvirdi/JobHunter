import React, { useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { Input } from './ui/input'

const AppliedJobTable = () => {
    const { allAppliedJobs } = useSelector(store => store.job);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('date'); // 'date', 'role', 'company'

    // Filter and sort jobs
    const filteredJobs = allAppliedJobs
        .filter(job => 
            job.job?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.job?.company?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'date') return new Date(b.createdAt) - new Date(a.createdAt);
            if (sortBy === 'role') return a.job?.title.localeCompare(b.job?.title);
            if (sortBy === 'company') return a.job?.company?.name.localeCompare(b.job?.company?.name);
            return 0;
        });

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search jobs or companies..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <select 
                    className="p-2 border rounded-md"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="date">Sort by Date</option>
                    <option value="role">Sort by Role</option>
                    <option value="company">Sort by Company</option>
                </select>
            </div>

            <Table>
                <TableCaption>A list of your applied jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="cursor-pointer" onClick={() => setSortBy('date')}>
                            Date {sortBy === 'date' && '↓'}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => setSortBy('role')}>
                            Job Role {sortBy === 'role' && '↓'}
                        </TableHead>
                        <TableHead className="cursor-pointer" onClick={() => setSortBy('company')}>
                            Company {sortBy === 'company' && '↓'}
                        </TableHead>
                        <TableHead className="text-right">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredJobs.length <= 0 ? (
                        <TableRow>
                            <TableCell colSpan={4} className="text-center py-8">
                                No jobs found
                            </TableCell>
                        </TableRow>
                    ) : (
                        filteredJobs.map((appliedJob) => (
                            <motion.tr
                                key={appliedJob._id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ scale: 1.01 }}
                                className="cursor-pointer hover:bg-gray-50"
                            >
                                <TableCell>{new Date(appliedJob?.createdAt).toLocaleDateString()}</TableCell>
                                <TableCell>{appliedJob.job?.title}</TableCell>
                                <TableCell>{appliedJob.job?.company?.name}</TableCell>
                                <TableCell className="text-right">
                                    <Badge 
                                        className={`
                                            ${appliedJob?.status === "rejected" ? 'bg-red-400 hover:bg-red-500' : 
                                              appliedJob.status === 'pending' ? 'bg-gray-400 hover:bg-gray-500' : 
                                              'bg-green-400 hover:bg-green-500'}
                                            transition-colors
                                        `}
                                    >
                                        {appliedJob.status.toUpperCase()}
                                    </Badge>
                                </TableCell>
                            </motion.tr>
                        ))
                    )}
                </TableBody>
            </Table>
        </motion.div>
    )
}

export default AppliedJobTable