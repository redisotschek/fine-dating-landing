import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FINÉ",
  description: "Casual dating chat bot",
  applicationName: "FINÉ",
  creator: "Fabulous Freak",
  icons: ["/icon.png"],
  openGraph: {
    type: "website",
    title: "FINÉ",
    description: "Casual dating chat bot",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "FINÉ",
      },
    ],
  },
  keywords: [
    "FINÉ dating bot",
    "Telegram dating bot",
    "Online dating assistant",
    "Dating chatbot",
    "Tinder bot",
    "Dating app helper",
    "Matchmaking bot",
    "Dating tips bot",
    "Dating advice bot",
    "Online relationship assistant",
    "Love chatbot",
    "Dating AI assistant",
    "Relationship advice bot",
    "Dating profile optimization",
    "Virtual dating assistant",
    "Tinder tips and tricks",
    "Dating conversation bot",
    "Dating support bot",
    "Dating guide bot",
    "Dating companion bot",
    "Бот для знакомств ФИНЭ",
    "Телеграм бот для знакомств",
    "Помощник по онлайн знакомствам",
    "Чат-бот для знакомств",
    "Бот для Тиндера",
    "Помощник в приложении для знакомств",
    "Матчмейкинг бот",
    "Бот для советов по знакомствам",
    "Бот для советов о любви",
    "Искусственный интеллект для знакомств",
    "Бот для советов по отношениям",
    "Оптимизация профиля для знакомств",
    "Виртуальный помощник для знакомств",
    "Советы и хитрости для Тиндера",
    "Чат-бот для разговоров о знакомствах",
    "Бот для поддержки в отношениях",
    "Руководство по знакомствам бот",
    "Бот-спутник для знакомств",
    "Бот для знакомств FINE",
    "Тэлеграм бот для знакамстваў",
    "Памочнік па онлайн-знаёмствах",
    "Чат-бот для знаёмстваў",
    "Бот для Тіндэра",
    "Памочнік у прыкладанні для знаёмстваў",
    "Мэтчмэйкінг бот",
    "Бот для саветаў па знаёмствах",
    "Бот для саветаў пра любоў",
    "Штучны інтэлект для знаёмстваў",
    "Бот для саветаў па адносінах",
    "Аптымізацыя прафілю для знаёмстваў",
    "Віртуальны памочнік для знаёмстваў",
    "Саветы і хітрасці для Тіндэра",
    "Чат-бот для размоў пра знаёмствы",
    "Бот для падтрымкі ў адносінах",
    "Кіраўніцтва па знаёмствах бот",
    "Бот-супутнік для знаёмстваў",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
