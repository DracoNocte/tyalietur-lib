import type { LanguageOid, LanguageScriptOid, LearningDifficulty, LinkType, UsageRarity } from '../..';
export interface Language {
    _id: LanguageOid;
    name: string;
    alternateNames: string[] | null;
    scripts: LanguageScriptOid[] | null;
    speakingFrequency: UsageRarity;
    writingFrequency: UsageRarity;
    learningDifficulty: LearningDifficulty;
    linkedLanguages: LanguageLink[] | null;
}
export interface LanguageScript {
    _id: LanguageScriptOid;
    name: string;
    alternateNames: string[] | null;
}
export interface LanguageLink {
    id: LanguageOid;
    link: LinkType;
}
export {};
