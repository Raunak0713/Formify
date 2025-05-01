import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import React from 'react';

const page = () => {
  return (
    <div className='flex gap-3 p-5'>
      <SignInButton>
        <Button variant={"outline"}>Sign In</Button>
      </SignInButton>
      <SignUpButton>
        <Button>Sign Up</Button>
      </SignUpButton>
    </div>
  );
}

export default page;
