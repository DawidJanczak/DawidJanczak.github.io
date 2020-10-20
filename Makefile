.PHONY: build
build: export NODE_ENV=production
build:
	@npx postcss -o assets/main.css css/*.css

.PHONY: build-dev
build-dev:
	@npx postcss -o assets/main.css css/*.css
