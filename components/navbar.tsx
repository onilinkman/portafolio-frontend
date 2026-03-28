"use client";

import {
	Navbar as HeroUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";
import { LanguageSwitcher } from "./switchlanguage/Switchlanguage";
import Image from "next/image";

export const Navbar = () => {
	const locale = useLocale();
	const t = useTranslations("nav");
	const withLocale = (href: string) => {
		if (href.startsWith("http") || href.startsWith("mailto:")) return href;
		if (href.startsWith("#")) return `/${locale}${href}`;
		return `/${locale}${href}`;
	};

	return (
		<HeroUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink
						className="flex justify-start items-center gap-2"
						href={withLocale("#inicio")}
					>
						<Image
							src="/text1.svg"
							alt="..."
							width={25}
							height={25}
							className="invert brightness-0 left-0"
						/>
						<div className="leading-tight">
							<p className="font-semibold text-inherit">
								Christian Marban
							</p>
							<p className="text-xs text-default-500">
								Full Stack Developer
							</p>
						</div>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-3">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium",
								)}
								color="foreground"
								href={withLocale(item.href)}
							>
								{t(item.label)}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<Link
						isExternal
						aria-label="Github"
						href={siteConfig.links.github}
					>
						<GithubIcon className="text-default-500" />
					</Link>
					<LanguageSwitcher />
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem className="hidden md:flex">
					<Button
						as={Link}
						className="text-sm font-semibold"
						href={withLocale("#contacto")}
						variant="flat"
					>
						{t("demo")}
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link
					isExternal
					aria-label="Github"
					href={siteConfig.links.github}
				>
					<GithubIcon className="text-default-500" />
				</Link>
				<LanguageSwitcher />
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index ===
											  siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href={withLocale(item.href)}
								size="lg"
							>
								{t(item.label)}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</HeroUINavbar>
	);
};
