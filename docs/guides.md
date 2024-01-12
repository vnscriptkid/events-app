## Addons vscode

- Prisma
- sqlite > publisher:"alexcvzz"

## Libs

- react-datepicker
- @nextui-org/react 
- framer-motion
- @faker-js/faker

## Setup env

- nvm install 18.17.0 (incase nextjs requires newer version of nodejs)
- nvm use 18.17.0
- node -v

## Prisma

- npm install prisma
- npx prisma init --datasource-provider sqlite
- npx prisma migrate dev
<!-- - @auth/core  -->
- @auth/prisma-adapter 
- next-auth

## github oauth setup
- https://github.com/settings/apps/new
- events-next-app-dev
- homepage url: http://localhost:3000/
- authorization callback url: http://localhost:3000/api/auth/callback/github