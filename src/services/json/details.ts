import { useTranslations } from "next-intl"

export const usePersonalDetails = () => {

    const t = useTranslations();

    return[
    {
        item: t('aboutDetails.contact'),
        itemValue: t('details.contact')

    },
    {
        item: t('aboutDetails.phone'),
        itemValue: t('details.phone')

    },
    {
        item: t('aboutDetails.dob'),
        itemValue: t('details.dob')

    },
    {
        item: t('aboutDetails.language'),
        itemValue: t('details.language')

    },
    {
        item: t('aboutDetails.interest'),
        itemValue: t('details.interest')

    },
]
}