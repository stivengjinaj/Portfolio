import {programmingLanguages} from "../misc/personalData.ts";
import {getColorClasses, languageTypeToString} from "../misc/helper.ts";
import {useTranslation} from "../TranslationContext.tsx";

const ProgrammingLanguages = () => {
    const {t} = useTranslation();
    return (
        <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-violet-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:transform hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{t('programmingLanguagesTitle')}</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programmingLanguages.map((programmingLanguage, index) => {
                        const colors = getColorClasses(programmingLanguage.type);
                        return (
                            <div
                                key={index}
                                className={`bg-gradient-to-br ${colors.bg} rounded-xl p-4 border ${colors.border} hover:scale-105 transition-transform duration-200`}
                            >
                                <div className="flex items-center mb-3">
                                    <h5 className={`font-semibold ${colors.text}`}>{languageTypeToString(programmingLanguage.type)}</h5>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {programmingLanguage.languages.map((language, index) => (
                                        <img key={`${language.name}-${index}`} src={language.icon} alt={language.name} className="w-10 h-10 object-fit me-3" />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProgrammingLanguages;