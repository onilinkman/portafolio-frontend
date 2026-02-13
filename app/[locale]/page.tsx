"use client";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useTranslations } from "next-intl";
import SplitText from "@/components/SplitText";

export default function Home() {
	const t = useTranslations("home");
	const handleAnimationComplete = () => {
		console.log("All letters have animated!");
	};
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-xl text-center justify-center">
				<br className="mb-4" />
				<span className={title()}>{t("welcome")}&nbsp;</span>
				<br className="mb-3" />
				<span className={title()}>{t("myName")}</span>

				<br/>
				<span className={title({color:"cyan"})}>
					{" " + t("name")}&nbsp;
				</span>

				<SplitText
					text={t("presentation")}
					className="text-xl font-semibold text-center mt-4"
					delay={50}
					duration={1.25}
					ease="power3.out"
					splitType="chars"
					from={{ opacity: 0, y: 40 }}
					to={{ opacity: 1, y: 0 }}
					threshold={0.1}
					rootMargin="-100px"
					textAlign="center"
					onLetterAnimationComplete={handleAnimationComplete}
				/>
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					className={buttonStyles({
						color: "primary",
						radius: "full",
						variant: "shadow",
					})}
					href={siteConfig.links.docs}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({
						variant: "bordered",
						radius: "full",
					})}
					href={siteConfig.links.github}
				>
					<GithubIcon size={20} />
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideCopyButton hideSymbol variant="bordered">
					<span>
						Get started by editing{" "}
						<Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
		</section>
	);
}
