"use server"

import { cookies } from "next/headers";

const COOKIE_NAME = 'NEXT_LOCALE';
const defaultLocale = 'en';

export const getUserLocale = async () => {
    const cookiesStore = await cookies();
    return cookiesStore.get(COOKIE_NAME)?.value || defaultLocale;
};

export const setUserLocale = async (locale: string) => {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, locale)
}