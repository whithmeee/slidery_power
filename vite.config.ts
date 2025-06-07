import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "Нейросеть для презентаций онлайн бесплатно | Slidery.AI",
          description: "Slidery.AI — нейросеть для создания презентаций. Введите тему и получите готовые слайды за секунды. Онлайн, бесплатно, без регистрации и на русском языке.",
          keywords: "нейросеть для презентаций, slidery.ai, создать презентацию онлайн, презентация бесплатно, генератор слайдов, презентация без регистрации, презентация на русском, gpt презентация, ai презентация, нейросеть онлайн презентация",

          // OpenGraph
          ogTitle: "Slidery.AI — создавай презентации с помощью нейросети",
          ogDescription: "Slidery.AI — нейросеть нового поколения для генерации презентаций. Просто укажите тему — и получите готовые слайды. Всё онлайн, без ограничений, на русском языке.",
          ogUrl: "https://slidery.ai",
          ogSiteName: "Slidery.AI",
          ogLocale: "ru_RU",
          ogType: "website",

          // Twitter
          twitterCard: "summary_large_image",
          twitterTitle: "Slidery.AI — нейросеть для презентаций онлайн бесплатно",
          twitterDescription: "Slidery.AI создаёт презентации за вас. Введите тему и получите готовые слайды. Всё онлайн, без регистрации и бесплатно. Работает на русском языке."
        }
      }
    })
  ]
})
