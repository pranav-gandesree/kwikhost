'use client';

import { useEffect, useState } from 'react';
import { GetDomains } from '@/actions/getProjects';
import Link from 'next/link';
import { FileText, Globe } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';

interface Domain {
  id: string;
  domain: string;
  updatedAt: string;
}

export default function ProjectsList({ userId }: { userId: string }) {
  const [domains, setDomains] = useState<Domain[]>([]);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const result = await GetDomains(userId);
        /* eslint-disable @typescript-eslint/no-explicit-any */
        const formattedResult = result.map((domain: any) => ({
          ...domain,
          updatedAt: new Date(domain.updatedAt).toISOString().split('T')[0],
        }));
        setDomains(formattedResult);
      } catch (error) {
        console.error('Failed to fetch domains:', error);
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

  return (
    <div className="space-y-4">
      {domains.map((domain) => (
        <div
          key={domain.id}
          className="flex items-center gap-6 p-4 bg-zinc-900 border border-zinc-700 rounded-xl shadow-sm hover:shadow-md transition-all"
        >
          
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>

          
          <div className="flex-1">
            <Link
              href={`https://${domain.domain}.kwikhost.xyz`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-white hover:text-purple-400 transition-colors"
            >
              {domain.domain}.kwikhost.xyz
            </Link>
            <p className="text-sm text-zinc-400 mt-1">
               Last Modified - {domain.updatedAt}
            </p>
          </div>

          
          <span className="text-sm text-green-400 bg-green-800/40 px-2 py-1 rounded-lg">
            Active
          </span>

         
          <Button
            size="icon"
            variant="ghost"
            className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-zinc-800 transition-colors"
            onClick={() => handleCopy(domain.domain)}
          >
            <FileText className="h-5 w-5 text-zinc-400 hover:text-white" />
          </Button>
        </div>
      ))}
    </div>
  );
}
