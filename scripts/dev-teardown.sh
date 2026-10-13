#!/usr/bin/env bash
# Undo this checkout's dev setup:
#   ./scripts/dev-teardown.sh            → remove web/.env + web/.env.local
#   ./scripts/dev-teardown.sh --keep-env → keep web/.env (keys you added)
#
# There is no per-checkout database anymore: the local Supabase stack is
# machine-global and shared by every worktree, so teardown does NOT stop it.
# `supabase stop` stops it for the whole machine.
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ "${1:-}" != "--keep-env" && -f web/.env ]]; then
	rm web/.env
	echo "→ removed web/.env"
fi
if [ -f web/.env.local ]; then
	rm web/.env.local
	echo "→ removed web/.env.local"
fi
echo "Dev env files removed. The shared Supabase stack keeps running (supabase stop = machine-wide). Re-create anytime: ./scripts/dev-setup.sh"
