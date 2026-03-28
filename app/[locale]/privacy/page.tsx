import { getTranslations } from "next-intl/server";

type PageProps = {
	params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: PageProps) {
	const { locale } = await params;
	const t = await getTranslations({
		locale,
		namespace: "legal",
	});

	return (
		<div className="mx-auto max-w-4xl px-6 py-16">
			<h1 className="text-3xl font-semibold text-foreground">
				{t("privacy.title")}
			</h1>
			<p className="mt-2 text-sm text-muted-foreground">
				{t("privacy.lastUpdated")}
			</p>

			<section className="mt-8 space-y-4 text-sm text-foreground/80">
				<p>{t("privacy.intro")}</p>
				<p>{t("privacy.owner")}</p>
			</section>

			<section className="mt-10 space-y-4 text-sm text-foreground/80">
				<h2 className="text-lg font-semibold text-foreground">
					{t("privacy.sectionInfoTitle")}
				</h2>
				<p>{t("privacy.sectionInfoBody")}</p>
			</section>

			<section className="mt-10 space-y-4 text-sm text-foreground/80">
				<h2 className="text-lg font-semibold text-foreground">
					{t("privacy.sectionUseTitle")}
				</h2>
				<p>{t("privacy.sectionUseBody")}</p>
			</section>

			<section className="mt-10 space-y-4 text-sm text-foreground/80">
				<h2 className="text-lg font-semibold text-foreground">
					{t("privacy.sectionSecurityTitle")}
				</h2>
				<p>{t("privacy.sectionSecurityBody")}</p>
			</section>

			<section className="mt-10 space-y-4 text-sm text-foreground/80">
				<h2 className="text-lg font-semibold text-foreground">
					{t("privacy.sectionRetentionTitle")}
				</h2>
				<p>{t("privacy.sectionRetentionBody")}</p>
			</section>

			<section className="mt-10 space-y-4 text-sm text-foreground/80">
				<h2 className="text-lg font-semibold text-foreground">
					{t("privacy.sectionRightsTitle")}
				</h2>
				<p>{t("privacy.sectionRightsBody")}</p>
			</section>

			<section className="mt-10 space-y-4 text-xs text-muted-foreground">
				<p>{t("privacy.disclaimer")}</p>
			</section>
		</div>
	);
}
