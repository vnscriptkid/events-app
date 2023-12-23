migrate:
	npx prisma migrate dev

up:
	docker compose up -d

down:
	docker compose down --remove-orphans --volumes

psql:
	docker exec -it pg-events psql -U user -d events

studio:
	npx prisma studio

# NEXTAUTH_SECRET
gen-auth-secret:
	openssl rand -base64 32