# Деплой на Vercel — инструкция для клиента

Сайт статический: сервер, база данных и API-ключи не нужны.

## Вариант 1 — самый простой

1. Откройте ссылку Deploy to Vercel:
   https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbitmaster162%2Frostikson-portfolio&repository-name=rostikson-portfolio
2. Войдите или зарегистрируйтесь в Vercel.
3. Выберите свой GitHub-аккаунт.
4. При необходимости разрешите Vercel создать копию репозитория в вашем GitHub.
5. Project Name можно оставить `rostikson-portfolio`.
6. Framework Preset: `Other` / автоопределение.
7. Build Command не нужен.
8. Output Directory не нужен.
9. Нажмите **Deploy**.
10. После завершения Vercel выдаст адрес вида `https://...vercel.app`.

## Подключение своего домена

В Vercel откройте проект → Settings → Domains → Add Domain. Добавьте домен и выполните DNS-инструкции Vercel.

## Обновления

Если проект создан через Deploy Button с копированием репозитория, дальнейшие изменения в вашей копии GitHub автоматически создают новые Vercel deployments.

## Медиа

Короткие кейсы встроены как Instagram Reels и проигрываются внутри страницы. Длинный кейс квартиры открывается на YouTube. Верхнее фото хранится непосредственно в репозитории, поэтому оно не зависит от внешнего фотохостинга.

## Исходный репозиторий

https://github.com/bitmaster162/rostikson-portfolio
