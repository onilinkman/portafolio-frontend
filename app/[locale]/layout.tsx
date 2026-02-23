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
				themeProps={{ attribute: "class", defaultTheme: "dark" }}
			>
				<div
					className={clsx(
						"",
						fontSans.variable,
					)}
				>
					<Navbar />
					<main >
						<div >
							<Particles
								particleColors={["#ffffff"]}
								particleCount={400}
								particleSpread={10}
								speed={0.3}
								particleBaseSize={100}
								moveParticlesOnHover
								alphaParticles={true}
								disableRotation={false}
								pixelRatio={1}
							/>
							{children}
						</div>
					</main>
				</div>
			</Providers>
		</NextIntlClientProvider>
	);
}
