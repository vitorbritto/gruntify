
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

SCRIPT = app/scripts/main.js
STYLE  = app/styles/style.styl
VIEW   = app/index.html

# Global Tasks
global:
	@echo " $(INFO) Installing Dependencies... please wait."
	@npm install -q
	@rm -rf makefile logo-gruntify.jpg README.md


# -------------------------------------------------------------------------------------
# NEW PROJECT
# -------------------------------------------------------------------------------------

new: init_new global
	@echo ""
	@echo " $(CHECK) Done!"

init_new:
	@echo " $(INFO) Scaffolding"

	@mkdir -p $(APP)
	@mkdir -p $(PUBLIC)

	@touch $(SCRIPT)
	@touch $(STYLE)
	@touch $(VIEW)


# -------------------------------------------------------------------------------------
# EXISTING PROJECT
# -------------------------------------------------------------------------------------


current: init_current global
	@echo ""
	@echo " $(CHECK) Done!"

init_current:
	@echo " $(INFO) Scaffolding"

	@mv * .[^.]* ..

	@rm gruntify
