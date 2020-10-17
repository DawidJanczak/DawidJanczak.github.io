.PHONY: build
build: export NODE_ENV=production
build:
	@npx postcss -o assets/main.css css/*.css

.PHONY: postcss
postcss:
	@npx postcss -o assets/main.css css/*.css
