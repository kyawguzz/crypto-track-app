import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav
      className='w-[40%] mt-10 flex justify-around align-middle '
    >
        <NavLink 
            to="/"
            end
            className={
                    ({isActive}) => {
                        return `w-full text-base text-center font-nunito p-2 m-2.5
                        ${
                          isActive
                          ? "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
                          :" text-gray-100"
                        }
                           border border-cyan cursor-pointer rounded-lg capitalize font-semibold`;
                    }
            }
        >
            Crypto
        </NavLink>

        <NavLink 
            to="/trending"
            className={
                ({isActive}) => {
                    return `w-full text-base text-center font-nunito p-2 m-2.5
                    ${
                      isActive
                      ? "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
                      :" text-gray-100"
                    }
                    border border-cyan cursor-pointer rounded-lg capitalize font-semibold`;
                }
        }
        >
            Trending
        </NavLink>

        <NavLink 
            to="/saved"
            className={
                ({isActive}) => {
                    return `w-full text-base text-center font-nunito p-2 m-2.5
                    ${
                      isActive
                        ? "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
                        :" text-gray-100"
                    }
                    border border-cyan cursor-pointer rounded-lg capitalize font-semibold`;
                }
        }
        >
            Saved
        </NavLink>
    </nav>
  )
}

export default Navigation