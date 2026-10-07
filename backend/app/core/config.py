from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_env: str = "development"
    cors_origins: list[str] = ["http://localhost:3000"]

    supabase_url: str = ""
    supabase_key: str = ""
    supabase_jwt_secret: str = ""
    database_url: str = ""

    llm_provider: str = "openrouter"
    openrouter_api_key: str = ""
    llm_model: str = ""

    redis_url: str = ""

    model_config = SettingsConfigDict(env_file="../.env", extra="ignore")


settings = Settings()
