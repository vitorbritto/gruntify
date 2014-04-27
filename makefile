
# -- GRUNTIFY -----------------------------------------------------------------------------------------
#
# Name       : Bootstrap for Gruntify
# Descrition : simple program to start a bootstrap for Gruntify
# Version    : 0.1.0
# Author     : Vitor Britto <code@vitorbritto.com.br>
#
#
# -----------------------------------------------------------------------------------------------------


# -------------------------------------------------------------------------------------
# CONFIG
# -------------------------------------------------------------------------------------

# Main
DONE  = \033[32m✔\033[32m
ERROR = \033[31m✖\033[31m
INFO  = \033[36m→\033[36m
LINE  = -----------------------------------------

# Scaffolding
APP    = app/{scripts/{modules,requires},styles,images/icons,fonts,views,spec/{helpers,modules}}
PUBLIC = public/{scripts,styles,images/icons,fonts}


# -------------------------------------------------------------------------------------
# BUILD
# -------------------------------------------------------------------------------------

build: init npm
	@echo ""
	@echo " $(CHECK) Done!"

init:
	@echo " $(INFO) Scaffolding"

	@mkdir -p $(APP)
	@mkdir -p $(PUBLIC)

npm:
	@echo " $(INFO) Installing Dependencies"
	@npm install

