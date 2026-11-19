import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "/logo/profile.svg",
	name: "受不了",
	bio: "记录日常，收藏喜欢。",
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/ARIAREA",
		},
	],
});
