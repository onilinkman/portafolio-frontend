import { hasLocale, NextIntlClientProvider } from "next-intl";
import { Providers } from "../providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import Particles from "@/components/bit/particle/Particle";

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	// Enable static rendering
	setRequestLocale(locale);

	return (
		<NextIntlClientProvider locale={locale}>
			<Providers
				themeProps={{ attribute: "class", defaultTheme: "light" }}
			>
				<div
					className={clsx(
						"min-h-screen",
						fontSans.variable,
					)}
				>
					<Navbar />
					<main>
						<div className="relative">
							<Particles
								particleColors={["#0ea5e9", "#22c55e", "#f97316"]}
								particleCount={220}
								particleSpread={9}
								speed={0.2}
								particleBaseSize={80}
								moveParticlesOnHover
								alphaParticles={true}
								disableRotation={false}
								pixelRatio={1}
							/>
							<div className="relative z-10">{children}</div>
						</div>
					</main>
				</div>
			</Providers>
		</NextIntlClientProvider>
	);
}
