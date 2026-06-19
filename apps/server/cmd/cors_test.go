package main

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/labstack/echo/v5"
	"github.com/stretchr/testify/require"
)

func TestCORSMiddlewareAllowsWebClientHeaders(t *testing.T) {
	e := echo.New()
	e.Use(corsMiddleware("http://localhost:3000"))
	e.POST("/api/v1/auth/login", func(c *echo.Context) error {
		return c.NoContent(http.StatusOK)
	})

	req := httptest.NewRequest(http.MethodOptions, "/api/v1/auth/login", nil)
	req.Header.Set("Origin", "http://localhost:3000")
	req.Header.Set("Access-Control-Request-Method", http.MethodPost)
	req.Header.Set("Access-Control-Request-Headers", "content-type,x-requested-with")
	rec := httptest.NewRecorder()

	e.ServeHTTP(rec, req)

	require.Equal(t, http.StatusNoContent, rec.Code)
	require.Equal(t, "http://localhost:3000", rec.Header().Get("Access-Control-Allow-Origin"))
	require.Equal(t, "true", rec.Header().Get("Access-Control-Allow-Credentials"))

	allowedHeaders := strings.ToLower(rec.Header().Get("Access-Control-Allow-Headers"))
	require.Contains(t, allowedHeaders, "content-type")
	require.Contains(t, allowedHeaders, "x-requested-with")
}
