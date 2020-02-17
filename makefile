
install:
	@echo 📦 Downloading dependencies
	@npm install

build:
	@echo 📦 Building package
	@npm run build
	@echo 📃 Adding meta data
	@cp package.json dist/package.json
	@echo 🚀 Finished building release

publish:
	npm publish --dry-run dist/

clean:
	@echo 🧹 Removing node_modules
	@rm -rf node_modules
	@echo 🧹 Removing dist/
	@rm -r dist
