# Data preparation

raw datasets -> processing -> standardized Case Blueprint (JSON) -> ingestion into PostgreSQL

- `raw/`        : original datasets (gitignored, not pushed)
- `blueprints/` : approved case JSON files (validated against the Pydantic schema)
- `scripts/`    : processing + DB ingestion scripts

JSON here is a preparation format only. The production source of truth is PostgreSQL.
