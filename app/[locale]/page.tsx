import Link from "next/link";
import { getTranslations } from "next-intl/server";

type HomeProps = {
	params: Promise<{ locale: string }>;
};

export default async function Home({ params }: HomeProps) {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "portfolio",
	});
	const basePath = `/${locale}`;
	const chips = t.raw("hero.chips") as string[];
	const services = t.raw("services.items") as {
		title: string;
		description: string;
	}[];
	const stack = t.raw("stack.items") as string[];
	const productFeatures = t.raw("product.features") as string[];
	const compliance = t.raw("compliance.items") as string[];
	const securityItems = t.raw("security.items") as string[];

	return (
		<div className="bg-[radial-gradient(circle_at_top,_#e8f4ff,_#ffffff_45%,_#f8fafc_75%)] dark:bg-[radial-gradient(circle_at_top,_#0b1220,_#0b1220_35%,_#020617_75%)]">
			<section
				id="inicio"
				className="relative overflow-hidden px-6 pt-24 pb-16"
			>
				<div className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(14,165,233,0.35),_transparent_60%)] blur-3xl" />
				<div className="absolute bottom-0 left-0 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,_rgba(34,197,94,0.25),_transparent_60%)] blur-3xl" />
				<div className="relative mx-auto max-w-6xl">
					<div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
								{t("hero.eyebrow")}
							</p>
							<h1 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">
								{t("hero.name")}
								<span className="block text-foreground/80">
									{t("hero.role")}
								</span>
							</h1>
							<p className="mt-4 text-lg text-muted-foreground">
								{t("hero.intro")}
							</p>
							<div className="mt-6 flex flex-wrap gap-2">
								{chips.map((chip) => (
									<span
										key={chip}
										className="rounded-full border border-border bg-background/80 px-3 py-1 text-sm text-muted-foreground shadow-sm"
									>
										{chip}
									</span>
								))}
							</div>
							<div className="mt-8 flex flex-wrap gap-3">
								<Link
									className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background shadow-lg transition hover:-translate-y-0.5"
									href="#contacto"
								>
									{t("hero.ctaPrimary")}
								</Link>
								<Link
									className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:border-border"
									href="#producto"
								>
									{t("hero.ctaSecondary")}
								</Link>
							</div>
							<div className="mt-8 grid gap-4 sm:grid-cols-3">
								{(
									t.raw("hero.stats") as {
										title: string;
										description: string;
									}[]
								).map((stat) => (
									<div
										key={stat.title}
										className="rounded-2xl border border-border bg-background/70 p-4"
									>
										<p className="text-2xl font-semibold text-foreground">
											{stat.title}
										</p>
										<p className="text-sm text-muted-foreground">
											{stat.description}
										</p>
									</div>
								))}
							</div>
						</div>

						<div className="rounded-3xl border border-border bg-background/70 p-6 shadow-xl">
							<p className="text-sm font-semibold text-muted-foreground">
								{t("compliance.title")}
							</p>
							<h2 className="mt-3 text-2xl font-semibold text-foreground">
								{t("compliance.headline")}
							</h2>
							<p className="mt-3 text-sm text-muted-foreground">
								{t("compliance.body")}
							</p>
							<ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
								{compliance.map((item) => (
									<li
										key={item}
										className="flex items-start gap-2"
									>
										<span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="servicios" className="px-6 py-16">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
						{t("services.eyebrow")}
					</p>
					<div className="mt-4 grid gap-6 md:grid-cols-3">
						{services.map((service) => (
							<div
								key={service.title}
								className="rounded-2xl border border-border bg-background p-6 shadow-sm"
							>
								<h3 className="text-xl font-semibold text-foreground">
									{service.title}
								</h3>
								<p className="mt-3 text-sm text-muted-foreground">
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="producto" className="px-6 py-16">
				<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
					<div className="rounded-3xl border border-border bg-foreground p-8 text-background">
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							{t("product.eyebrow")}
						</p>
						<h3 className="mt-4 text-3xl font-semibold">
							{t("product.title")}
						</h3>
						<p className="mt-4 text-sm text-muted-foreground">
							{t("product.body")}
						</p>
						<div className="mt-6 grid gap-3 text-sm text-muted-foreground">
							{productFeatures.map((feature) => (
								<span
									key={feature}
									className="flex items-center gap-2"
								>
									<span className="h-2 w-2 rounded-full bg-cyan-400" />
									{feature}
								</span>
							))}
						</div>
					</div>
					<div className="rounded-3xl border border-border bg-background p-8 shadow-sm">
						<h3 className="text-2xl font-semibold text-foreground">
							{t("product.flowTitle")}
						</h3>
						<p className="mt-4 text-sm text-muted-foreground">
							{t("product.flowBody")}
						</p>
						<div className="mt-6 rounded-2xl bg-muted p-4 text-sm text-muted-foreground">
							<p className="font-semibold text-foreground/80">
								{t("product.dataTitle")}
							</p>
							<p className="mt-2">{t("product.dataBody")}</p>
						</div>
					</div>
				</div>
			</section>

			<section id="stack" className="px-6 py-16">
				<div className="mx-auto max-w-6xl">
					<p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
						{t("stack.eyebrow")}
					</p>
					<h3 className="mt-3 text-2xl font-semibold text-foreground">
						{t("stack.title")}
					</h3>
					<div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{stack.map((item) => (
							<div
								key={item}
								className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground/80 shadow-sm"
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="seguridad" className="px-6 py-16">
				<div className="mx-auto max-w-6xl rounded-3xl border border-border bg-background p-8 shadow-sm">
					<div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
						<div>
							<p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
								{t("security.eyebrow")}
							</p>
							<h3 className="mt-3 text-2xl font-semibold text-foreground">
								{t("security.title")}
							</h3>
							<p className="mt-4 text-sm text-muted-foreground">
								{t("security.body")}
							</p>
						</div>
						<div className="grid gap-3 text-sm text-muted-foreground">
							{securityItems.map((item) => (
								<div
									key={item}
									className="rounded-2xl border border-border bg-muted px-4 py-3"
								>
									{item}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="contacto" className="px-6 py-16">
				<div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
							{t("contact.eyebrow")}
						</p>
						<h3 className="mt-3 text-3xl font-semibold text-foreground">
							{t("contact.title")}
						</h3>
						<p className="mt-4 text-sm text-muted-foreground">
							{t("contact.body")}
						</p>
						<div className="mt-6 flex flex-col gap-3 text-sm text-foreground/80">
							<span>{t("contact.email")}</span>
							<span>{t("contact.location")}</span>
							<span>{t("contact.availability")}</span>
						</div>
					</div>
					<div className="rounded-3xl border border-border bg-background p-6 shadow-sm">
						<p className="text-sm font-semibold text-muted-foreground">
							{t("contact.legalTitle")}
						</p>
						<div className="mt-4 flex flex-col gap-3 text-sm">
							<Link
								className="rounded-2xl border border-border px-4 py-3 font-semibold text-foreground/80"
								href={`${basePath}/privacy`}
							>
								{t("contact.privacyLink")}
							</Link>
							<Link
								className="rounded-2xl border border-border px-4 py-3 font-semibold text-foreground/80"
								href={`${basePath}/terms`}
							>
								{t("contact.termsLink")}
							</Link>
						</div>
						<p className="mt-6 text-xs text-muted-foreground">
							{t("contact.disclaimer")}
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
