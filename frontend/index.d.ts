
import 'next-auth'
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      email: string;
      name: string;
    } 
  }

  interface JWT {
    uid: string;
    email?: string;
  }
}
