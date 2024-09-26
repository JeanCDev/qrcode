import "./styles.scss";

import initTranslations from "../i18n";
import HomePageContent from "@/components/HomePageContent";
import TranslationsProvider from "@/components/TranslationProvider";

const i18nNamespaces = ['home'];

const Home = async({ params: { locale } }: { params: { locale: string } }) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <HomePageContent/>
    </TranslationsProvider>
  );
}

export default Home;
