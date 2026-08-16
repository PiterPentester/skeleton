FROM cgr.dev/chainguard/python:latest-dev AS builder
WORKDIR /app
RUN pip install uv
COPY pyproject.toml .
RUN uv sync --no-dev

FROM cgr.dev/chainguard/python:latest
WORKDIR /app
COPY --from=builder /app/.venv /app/.venv
COPY src/ /app/src/
ENV PATH="/app/.venv/bin:$PATH"
ENTRYPOINT ["python", "src/main.py"]
