package main

import (
	"net/http"

	"github.com/labstack/echo/v5"
	echoMiddleware "github.com/labstack/echo/v5/middleware"
)

func corsConfig(frontendOrigin string) echoMiddleware.CORSConfig {
	return echoMiddleware.CORSConfig{
		AllowOrigins: []string{frontendOrigin},
		AllowMethods: []string{
			http.MethodGet,
			http.MethodPost,
			http.MethodPut,
			http.MethodPatch,
			http.MethodDelete,
		},
		AllowHeaders: []string{
			"Origin",
			"Content-Type",
			"Accept",
			"Authorization",
			"X-Requested-With",
		},
		ExposeHeaders:    []string{"Content-Length", "Content-Type", "X-Request-Id"},
		AllowCredentials: true,
	}
}

func corsMiddleware(frontendOrigin string) echo.MiddlewareFunc {
	return echoMiddleware.CORSWithConfig(corsConfig(frontendOrigin))
}
