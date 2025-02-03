import { Button } from '@headlessui/react';
import React from 'react'
import { signOut } from 'next-auth/react';

const SignOut = () => {
    const handleSignOut = async () => {
        await signOut();
      };
  return (
    <div className="flex justify-center">
      <Button variant="destructive" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  )
}

export default SignOut
