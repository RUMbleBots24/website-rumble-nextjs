"use client";
import React, { useEffect } from "react";
import {
    Navbar,
    NavbarMenu,
    NavbarBrand,
    NavbarContent,
    Image,
    NavbarItem,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link,
    Dropdown,
    DropdownTrigger,
    Button,
    DropdownMenu,
    DropdownItem,
    Switch
} from "@nextui-org/react";
import Logo from "@/app/images/logos/rumblebots.png";
import UPRM from "@/app/images/logos/upr-nobg.png";
import UPRMSEAL from '@/app/images/logos/seal-rum-uprm.svg';
import {
    SunIcon,
    MoonIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const NavLinks = [
    {
        text: "Home",
        href: "#",
        current: true,
        key: 0,
    },
    {
        text: "About us",
        href: "#",
        current: false,
        key: 1,
    },
    {
        text: "Meet The Team",
        href: "#",
        current: false,
        key: 2,
    },
    {
        text: "Meet The Bots",
        href: "#",
        current: false,
        key: 3,
    },
    {
        text: "Apply",
        href: "#",
        current: false,
        key: 4,
    },
];

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [theme, setTheme] = React.useState("light");
    

    useEffect(() => {
        if (window.matchMedia || document.documentElement.classList.contains('dark')) {
            const darkModeMediaQuery = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
            setTheme(darkModeMediaQuery.matches ? "dark": "light");

            if(darkModeMediaQuery.matches){
                document.documentElement.classList.add('dark');
            }
        }
    }, []);

    function goDark(){

        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
        setTheme('dark')

    }

    function goLight(){
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
        setTheme('light')

    }


    return (
        <Navbar shouldHideOnScroll>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden"
            />

            <NavbarContent className="lg:hidden pr-3">
                <NavbarBrand className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Link href={"#"}>
                        <Image
                            className="h-10 w-auto"
                            src={Logo.src}
                            alt={"Rumblebots logo"}
                        ></Image>
                    </Link>
                </NavbarBrand>
                <NavbarBrand className="absolute right-0 dark:hidden">
                    <Link href={"https://www.uprm.edu/portada/"}>
                        <Image
                            className={"h-10 w-auto"}
                            src={UPRM.src}
                            alt={"UPRM logo"}
                        ></Image>
                    </Link>
                </NavbarBrand>
                <NavbarBrand className="absolute right-0 hidden dark:block">
                    <Link href={"https://www.uprm.edu/portada/"}>
                        <Image
                            className="h-10 w-auto hover:scale-110 transition-all ease-in-out"
                            src={UPRMSEAL.src}
                            alt={"UPRM Seal"}
                        ></Image>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-4" justify="center">
                <NavbarBrand>
                    <Link href="#">
                        <Image
                            className="h-10 w-auto hover:scale-110 transition-all ease-in-out"
                            src={Logo.src}
                            alt={"Rumblebots Logo"}
                        ></Image>
                    </Link>
                </NavbarBrand>
                {NavLinks.map((item) => (
                    <NavbarItem key={item.key} isActive={item.current}>
                        <Link
                            className={
                                item.current
                                    ? "text-primary-500 underline underline-offset-8 font-heading"
                                    : "text-text-950 hover:underline underline-offset-8 font-heading"
                            }
                            href={item.href}
                        >
                            {item.text}
                        </Link>
                    </NavbarItem>
                ))}
                <Dropdown className="bg-background-100">
                    <NavbarItem className="border-l border-primary-950">
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                radius="sm"
                                variant="light"
                            >
                                {theme === "dark" ? (
                                    <SunIcon className="h-5 w-auto"></SunIcon>
                                ) : (
                                    <MoonIcon className="h-5 w-auto"></MoonIcon>
                                )}
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Theme Modes                                                "
                        className="h-30 w-auto font-heading"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        {theme === "dark" ? (
                            <DropdownItem key="lightheme" description="Switch to ligt theme" onClick={goLight}>
                                <SunIcon className="h-5 w-auto"></SunIcon>
                                <p className="text-text-950">Light Theme</p>
                            </DropdownItem>
                        ) : (
                            <DropdownItem key="darkheme" description="Switch to dark theme" onClick={goDark}>
                                <MoonIcon className="h-5 w-auto"></MoonIcon>
                                <p className="text-text-950">Dark Theme</p>
                            </DropdownItem>
                        )}
                        <DropdownItem
                            key="systemtheme"
                            description="Switch to your system's theme"
                            onClick={goLight}
                        >
                            <ComputerDesktopIcon className="h-5 w-auto"></ComputerDesktopIcon>
                            <p className="text-text-950">System Theme</p>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarBrand className="absolute right-0 dark:hidden">
                    <Link href={"https://www.uprm.edu/portada/"}>
                        <Image
                            className="h-10 w-auto hover:scale-110 transition-all ease-in-out"
                            src={UPRM.src}
                            alt={"UPRM Logo"}
                        ></Image>
                    </Link>
                </NavbarBrand>
                <NavbarBrand className="absolute right-0 hidden dark:block">
                    <Link href={"https://www.uprm.edu/portada/"}>
                        <Image
                            className="h-10 w-auto hover:scale-110 transition-all ease-in-out"
                            src={UPRMSEAL}
                            alt={"UPRM Seal"}
                        ></Image>
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarMenu>
                {NavLinks.map((item) => (
                    <NavbarMenuItem isActive={item.current} key={item.key}>
                        <Link
                            className={
                                item.current ? "w-full text-primary-500 underline underline-offset-8 font-heading"
                                    : "w-full text-text-950 hover:underline underline-offset-8 font-heading"
                            }
                            href={item.href}
                            security="lg"
                        >
                            {item.text}
                        </Link>
                    </NavbarMenuItem>
                ))}
                <Switch
                    defaultSelected
                    size="lg"
                    color="primary"
                    startContent={<SunIcon />}
                    endContent={<MoonIcon />}
                    onChange={theme === 'dark'? goLight:goDark}
                ></Switch>
            </NavbarMenu>
        </Navbar>
    );
}
