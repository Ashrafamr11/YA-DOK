from abc import ABC, abstractmethod


class LLMService(ABC):
    """Every provider (OpenRouter, direct API, local model) implements this.
    The rest of the app only ever talks to this interface."""

    @abstractmethod
    async def generate(self, messages: list[dict], **kwargs) -> str:
        ...
