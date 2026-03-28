import { getTranslations } from "next-intl/server";

type PageProps = {
	params: Promise<{ locale: string }>;
};

export default async function TermsPage({ params }: PageProps) {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "legal",
	});

	return (
		<div className="mx-auto max-w-4xl px-6 py-16">
			<h1 className="text-3xl font-semibold text-foreground">
				{t("terms.title")}
			</h1>
			<p className="mt-2 text-sm text-muted-foreground">
				{t("terms.lastUpdated")}
			</p>

			<section className="mt-8 space-y-4 text-sm text-foreground/80">
				<p>{t("terms.intro")}</p>
				<p>{t("terms.owner")}</p>
			</section>

			<section className="mt-10 space-y-4 text-sm text-foreground/80">
				<h2 className="text-lg font-semibold text-foreground">
					{t("terms.sectionUseTitle")}
				</h2>
				<p>{t("terms.sectionUseBody")}</p>
			</section>

			<section className="mt-10 space-y-4 text-sm text-foreground/80">
				<h2 className="text-lg font-semibold text-foreground">
					{t("terms.sectionAvailabilityTitle")}
				</h2>
				<p>{t("terms.sectionAvailabilityBody")}</p>
			</section>

			<section className="mt-10 space-y-4 text-sm text-foreground/80">
				<h2 className="text-lg font-semibold text-foreground">
					{t("terms.sectionIpTitle")}
				</h2>
				<p>{t("terms.sectionIpBody")}</p>
			</section>

			<section className="mt-10 space-y-4 text-sm text-foreground/80">
				<h2 className="text-lg font-semibold text-foreground">
					{t("terms.sectionLiabilityTitle")}
				</h2>
				<p>{t("terms.sectionLiabilityBody")}</p>
			</section>

			<section className="mt-10 space-y-4 text-xs text-muted-foreground">
				<p>{t("terms.disclaimer")}</p>
			</section>
		</div>
	);
}
