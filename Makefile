
DEV_COMPOSE_FILE=docker-compose.dev.yml
PROD_COMPOSE_FILE=docker-compose.yml


help:
	@echo "  ____    ___                 _   ____    ____  ";
	@echo " |  _ \  |_ _| __  __   ___  | | |  _ \  | __ ) ";
	@echo " | |_) |  | |  \ \/ /  / _ \ | | | | | | |  _ \ ";
	@echo " |  __/   | |   >  <  |  __/ | | | |_| | | |_) |";
	@echo " |_|     |___| /_/\_\  \___| |_| |____/  |____/ ";
	@echo "				by brainlesslukas"
	@echo ""
	@echo "Makefile for managing Docker Compose"
	@echo ""
	@echo "Usage:"
	@echo "  make dev        # Run Docker Compose in development mode"
	@echo "  make prod       # Run Docker Compose in production mode"
	@echo "  make down       # Stop and remove containers"
	@echo "  make build      # Build the containers"
	@echo "  make logs       # Tail logs of the containers"

dev:
	@echo "  ____    ___                 _   ____    ____  ";
	@echo " |  _ \  |_ _| __  __   ___  | | |  _ \  | __ ) ";
	@echo " | |_) |  | |  \ \/ /  / _ \ | | | | | | |  _ \ ";
	@echo " |  __/   | |   >  <  |  __/ | | | |_| | | |_) |";
	@echo " |_|     |___| /_/\_\  \___| |_| |____/  |____/ ";
	@echo "				by brainlesslukas"
	@echo ""
	@echo "Starting Docker Compose in development mode..."
	docker compose -f $(DEV_COMPOSE_FILE) up --build

prod:
	@echo "  ____    ___                 _   ____    ____  ";
	@echo " |  _ \  |_ _| __  __   ___  | | |  _ \  | __ ) ";
	@echo " | |_) |  | |  \ \/ /  / _ \ | | | | | | |  _ \ ";
	@echo " |  __/   | |   >  <  |  __/ | | | |_| | | |_) |";
	@echo " |_|     |___| /_/\_\  \___| |_| |____/  |____/ ";
	@echo "				by brainlesslukas"
	@echo ""
	@echo "Starting Docker Compose in production mode..."
	docker compose -f $(PROD_COMPOSE_FILE) up --build

down:
	@echo "Stopping and removing containers..."
	docker compose -f $(DEV_COMPOSE_FILE) down
	docker compose -f $(PROD_COMPOSE_FILE) down

build:
	@echo "  ____    ___                 _   ____    ____  ";
	@echo " |  _ \  |_ _| __  __   ___  | | |  _ \  | __ ) ";
	@echo " | |_) |  | |  \ \/ /  / _ \ | | | | | | |  _ \ ";
	@echo " |  __/   | |   >  <  |  __/ | | | |_| | | |_) |";
	@echo " |_|     |___| /_/\_\  \___| |_| |____/  |____/ ";
	@echo "				by brainlesslukas"
	@echo ""
	@echo "Building Docker images..."
	docker compose -f $(DEV_COMPOSE_FILE) build
	docker compose -f $(PROD_COMPOSE_FILE) build

logs:
	@echo "Tailing logs of containers..."
	docker compose -f $(DEV_COMPOSE_FILE) logs -f