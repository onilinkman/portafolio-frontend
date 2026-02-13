"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const switchLocale = (newLocale: string) => {
		router.push(`/${newLocale}${pathname.replace(`/${locale}`, "")}`);
	};

	return (
		<div className="flex gap-2">
			<button onClick={() => switchLocale("es")}>ES</button>
			<button onClick={() => switchLocale("en")}>EN</button>
		</div>
	);
}
