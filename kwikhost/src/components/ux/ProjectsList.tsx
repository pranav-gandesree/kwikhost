"use client";

import { useEffect, useState } from "react";
import { GetDomains } from "@/actions/getProjects";
import Link from "next/link";
import { FileText, Globe } from "lucide-react";
import { Button } from "../ui/button";

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
        console.log(result);
      

        // Convert updatedAt and modifiedAt to readable strings
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedResult = result.map((domain: any) => ({
          ...domain,
          updatedAt: new Date(domain.updatedAt).toLocaleString(),
          modifiedAt: new Date(domain.modifiedAt).toLocaleString(),
        }));

        setDomains(formattedResult);
        console.log(domains);
      } catch (error) {
        console.error("Failed to fetch domains:", error);
      }
    };

    fetchDomains();
  }, [userId]);

  return (
    <div className="space-y-4">
      {domains.map((domain) => (
        <div
          key={domain.id}
          className="flex items-center gap-4 p-3 bg-zinc-800/50 rounded-lg"
        >
          {/* Icon */}
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>

          {/* Domain Info */}
          <div >
            
          <Link href={`https://${domain.domain}.localhost:3000`} target="_blank" rel="noopener noreferrer">
            <span className="text-sm font-medium text-white hover:underline">
              {domain.domain}.localhost:3000
            </span>
          </Link>

           
          </div>

          <div className="text-xs text-zinc-400">Active • Custom Domain</div>
            
            <div className="text-xs text-zinc-400">
              Modified: {domain?.updatedAt}
            </div>


          {/* Action Button */}
          <div className="ml-auto">
            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full">
              <FileText className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
