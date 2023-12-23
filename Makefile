migrate:
	npx prisma migrate dev

up:
	docker compose up -d

down:
	docker compose down --remove-orphans --volumes

psql:
	docker exec -it pg-events psql -U user -d events