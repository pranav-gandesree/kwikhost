
'use client';

import { useEffect, useState } from 'react';
import { GetDomains } from '@/actions/getProjects';
import Link from 'next/link';
import { FileText, Globe, MoreVertical } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

// import { EditFileUpload } from './EditFileUpload';


interface Domain {
  id: string;
  domain: string;
  updatedAt: string;
}

export default function ProjectsList({ userId }: { userId: string }) {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   console.log("domains is", domains);
  // }, [domains]);



  useEffect(() => {
    setLoading(true);
    const fetchDomains = async () => {
      try {
        const result = await GetDomains(userId);
       
        const formattedResult = JSON.parse(
          JSON.stringify(
            /* eslint-disable @typescript-eslint/no-explicit-any */
            result.map((domain: any) => ({
              ...domain,
              updatedAt: new Date(domain.updatedAt).toISOString().split('T')[0],
            }))
          )
        );

        setDomains(formattedResult);
       
      } catch (error) {
        console.error('Failed to fetch domains:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, [userId]);

  const handleCopy = async (domain: string) => {
    try {
      const link = `https://${domain}.kwikhost.xyz`;
      await navigator.clipboard.writeText(link);
      toast.success('Link copied to clipboard', {
        description: link,
        duration: 3000,
      });
    } catch (error) {
      console.error('Failed to copy:', error);
      toast.error('Failed to copy link', {
        duration: 3000
      });
    }
  };

  const deleteProject =  async (domainId: string, fileKey: string) => {

    try{
      const res = await fetch(`/api/upload?fileKey=${fileKey}&domainId=${domainId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      console.log(data);
      
        toast.success("succesfully deleted the project")
        window.location.reload()

    }catch(err){
      console.log(err)
      toast.error("Failed to delete the file")
    }
    
  } 




  return (
    <div className="space-y-4">
      {loading ? (
        <p className="text-center text-zinc-400">Loading projects...</p>
      ) : domains.length === 0 ? (
        <p className="text-center text-zinc-400">No projects yet</p>
      ) : (
        domains.map((domain) => (
          <div
            key={domain.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-zinc-900 border border-zinc-700 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            {/* Icon - smaller on mobile */}
            <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start gap-3 mb-2 sm:mb-0">
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              
              {/* Status badge - visible only on mobile, side by side with icon */}
              <span className="sm:hidden text-xs text-green-400 bg-green-800/40 px-2 py-1 rounded-lg">
                Active
              </span>
            </div>

            {/* Content area - full width on mobile */}
            <div className="flex-1 w-full sm:w-auto">
              <div className="flex items-center justify-between w-full">
                <Link
                  href={`https://${domain.domain}.kwikhost.xyz`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-semibold text-white hover:text-purple-400 transition-colors flex items-center gap-1"
                >
                  {domain.domain}.kwikhost.xyz
                 
                </Link>
            
               
              </div>
              
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Last Modified - {domain.updatedAt}
              </p>
              
              {/* Action buttons on mobile - below content */}
              <div className="flex items-center justify-between mt-3 sm:hidden w-full">
                <Button
                  size="sm"
                  variant="secondary"
                  className="text-xs px-3 py-1 h-8"
                  onClick={() => handleCopy(domain.domain)}
                >
                  <FileText className="h-4 w-4 mr-1" /> Copy Link
                </Button>
                
                {/* Mobile dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuLabel>Manage Project</DropdownMenuLabel>
                    <DropdownMenuSeparator />


                    <DropdownMenuItem >Replace Existing File</DropdownMenuItem>


                    {/* <DropdownMenuItem>Custom Domain</DropdownMenuItem> */}
                    <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={() => deleteProject(domain.id, domain.domain)}>Delete Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Status badge - hidden on mobile, visible on desktop */}
            <span className="hidden sm:inline-block text-sm text-green-400 bg-green-800/40 px-2 py-1 rounded-lg">
              Active
            </span>

            {/* Copy button - hidden on mobile, visible on desktop */}
            <Button
              size="icon"
              variant="ghost"
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full hover:bg-zinc-800 transition-colors"
              onClick={() => handleCopy(domain.domain)}
            >
              <FileText className="h-5 w-5 text-zinc-400 hover:text-white" />
            </Button>
            
            {/* Desktop dropdown - hidden on mobile */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full hover:bg-zinc-800 transition-colors">
                    <MoreVertical className="h-5 w-5 text-zinc-400 hover:text-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Manage Project</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Dialog open={open} onOpenChange={setOpen}>
                     <DialogTrigger asChild>
                      <DropdownMenuItem className='cursor-pointer'>Replace Existing File</DropdownMenuItem>
                      </DialogTrigger>
                       <DialogContent className="max-w-lg bg-zinc-800 border border-zinc-700 rounded-xl shadow-lg">
                                  {/* <EditFileUpload domainName={domain.domain} /> */}
                      </DialogContent>
                  </Dialog>

                  {/* <DropdownMenuItem>Edit Project</DropdownMenuItem> */}
                  <DropdownMenuItem className="text-red-500 cursor-pointer" onClick={() => deleteProject(domain.id, domain.domain)}>Delete Project</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))
      )}
    </div>
  );
}