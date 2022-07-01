import React from 'react';
import { Navbar, Dropdown, Button, Menu } from 'react-daisyui';
import { NavLink } from 'react-router-dom';

export const CustomNavbar = () => {
    return (
        <div>
            <Navbar className='bg-blue-800 text-white '>
                <Navbar.Start>
                    <Menu horizontal className='p-0'>
                        <Menu.Item>
                            <NavLink
                                className='btn btn-ghost normal-case text-xl'
                                to={`/`}>
                                My Web Site
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Navbar.Start>
                <Navbar.Center className='hidden lg:flex'>
                    <Menu horizontal className='p-0'>
                        <Menu.Item>
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        display: 'block',
                                        margin: '1rem 0',
                                        color: isActive ? 'yellow' : '',
                                    };
                                }}
                                to={`/hotels`}>
                                Hotels
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink
                                style={({ isActive }) => {
                                    return {
                                        display: 'block',
                                        margin: '1rem 0',
                                        color: isActive ? 'yellow' : '',
                                    };
                                }}
                                to={`/about`}>
                                About Us
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End>
                    <Button>Get started</Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
};
