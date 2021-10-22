import Image from 'next/image';
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import { useRecoilState } from 'recoil';
import { signIn, signOut, useSession } from 'next-auth/react';
import { HomeIcon } from '@heroicons/react/solid';
import { modalState } from '../atoms/modalAtom';

import Badge from './Badge';

const Header = () => {
  const { data: session } = useSession();
  const [_, setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            objectFit="contain"
            layout="fill"
          />
        </div>

        <div className="relative flex-shrink-0 lg:hidden w-10 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            objectFit="contain"
            layout="fill"
          />
        </div>

        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn" />
                <Badge amount={9} />
              </div>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="navBtn"
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                className="h-10 w-10 rounded-full cursor-pointer"
                onClick={signOut}
                src={
                  session
                    ? session.user?.image
                    : 'https://i.pinimg.com/474x/a0/4d/84/a04d849cf591c2f980548b982f461401.jpg'
                }
                alt="profile-pic"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
