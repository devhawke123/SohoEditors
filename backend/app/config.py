from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    env: str = "development"
    secret_key: str = "changeme"

    database_url: str = "postgresql://user:password@localhost:5432/sohoeditors"

    aws_region: str = "eu-west-2"
    aws_access_key_id: str = ""
    aws_secret_access_key: str = ""
    s3_bucket_name: str = ""

    paypal_client_id: str = ""
    paypal_client_secret: str = ""
    paypal_mode: str = "sandbox"

    ses_from_email: str = ""

    frontend_origin: str = "http://localhost:3000"

    class Config:
        env_file = ".env"


settings = Settings()
