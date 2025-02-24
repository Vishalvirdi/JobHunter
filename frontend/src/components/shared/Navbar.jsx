import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { axiosInstance } from '@/utils/axios'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axiosInstance.get('/user/logout');
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='bg-white sticky top-0 z-50 shadow-sm transition-all duration-300 hover:shadow-md'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                <div>
                    <h1 className='text-2xl font-bold transition-colors duration-300 hover:text-[#F83002] cursor-pointer'>
                        Job<span className='text-[#F83002] transition-colors duration-300 hover:text-black'>Hunter</span>
                    </h1>
                </div>
                <div className='flex items-center gap-12'>
                    <ul className='flex font-medium items-center gap-5'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link className='transition-all duration-300 hover:text-[#F83002] relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#F83002] after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300' to="/admin/companies">Companies</Link></li>
                                    <li><Link className='transition-all duration-300 hover:text-[#F83002] relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#F83002] after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300' to="/admin/jobs">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link className='transition-all duration-300 hover:text-[#F83002] relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#F83002] after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300' to="/">Home</Link></li>
                                    <li><Link className='transition-all duration-300 hover:text-[#F83002] relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#F83002] after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300' to="/jobs">Jobs</Link></li>
                                    <li><Link className='transition-all duration-300 hover:text-[#F83002] relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#F83002] after:absolute after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300' to="/browse">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2'>
                                <Link to="/login"><Button variant="outline" className="transition-transform duration-300 hover:scale-105">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6] transition-all duration-300 hover:scale-105 hover:shadow-lg">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-64 p-3">
                                    <div className='space-y-3'>
                                        <div className='flex items-center gap-3 pb-2 border-b'>
                                            <Avatar className="h-9 w-9">
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
                                            </Avatar>
                                            <div className='overflow-hidden'>
                                                <h4 className='font-medium truncate'>{user?.fullname}</h4>
                                                <p className='text-xs text-muted-foreground truncate'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='space-y-1'>
                                            {user && user.role === 'student' && (
                                                <Link to="/profile">
                                                    <Button 
                                                        variant="ghost" 
                                                        className="w-full justify-start gap-2 hover:bg-slate-100"
                                                    >
                                                        <User2 size={16} />
                                                        View Profile
                                                    </Button>
                                                </Link>
                                            )}
                                            <Button 
                                                onClick={logoutHandler} 
                                                variant="ghost" 
                                                className="w-full justify-start gap-2 hover:bg-slate-100"
                                            >
                                                <LogOut size={16} />
                                                Logout
                                            </Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default Navbar