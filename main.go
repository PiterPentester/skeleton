package main

import (
	"embed"
	"fmt"
	"os"
	"path/filepath"
	"text/template"
)

//go:embed templates/* templates/github/workflows/*
var templateFS embed.FS

type ProjectData struct {
	ProjectName string
}

func main() {
	if len(os.Args) < 3 || os.Args[1] != "init" {
		fmt.Println("Usage: sk init <project_name>")
		os.Exit(1)
	}

	projectName := os.Args[2]
	data := ProjectData{ProjectName: projectName}

	fmt.Printf("🚀 Initializing Python project: %s\n", projectName)

	dirs := []string{
		projectName,
		filepath.Join(projectName, "src"),
		filepath.Join(projectName, "assets"),
		filepath.Join(projectName, "website"),
		filepath.Join(projectName, "tests"),
		filepath.Join(projectName, ".github", "workflows"),
	}

	for _, dir := range dirs {
		if err := os.MkdirAll(dir, 0755); err != nil {
			fmt.Printf("Error creating directory %s: %v\n", dir, err)
			os.Exit(1)
		}
	}

	fileMap := map[string]string{
		"templates/Dockerfile":                    "Dockerfile",
		"templates/Makefile":                      "Makefile",
		"templates/env.example":                   ".env",
		"templates/pre-commit-config.yaml":        ".pre-commit-config.yaml",
		"templates/pyproject.toml":                "pyproject.toml",
		"templates/github/workflows/ci.yaml":      ".github/workflows/ci.yaml",
		"templates/github/workflows/webpage.yaml": ".github/workflows/webpage.yaml",
		"templates/src/main.py":                   "src/main.py",
	}

	for embedPath, targetPath := range fileMap {
		content, err := templateFS.ReadFile(embedPath)
		if err != nil {
			fmt.Printf("Error reading embedded template %s: %v\n", embedPath, err)
			continue
		}

		tmpl, err := template.New(targetPath).Delims("[[", "]]").Parse(string(content))
		if err != nil {
			fmt.Printf("Error parsing template %s: %v\n", targetPath, err)
			continue
		}

		fullTargetPath := filepath.Join(projectName, targetPath)
		outFile, err := os.Create(fullTargetPath)
		if err != nil {
			fmt.Printf("Error creating file %s: %v\n", fullTargetPath, err)
			continue
		}

		if err := tmpl.Execute(outFile, data); err != nil {
			outFile.Close()
			fmt.Printf("Error writing file %s: %v\n", fullTargetPath, err)
			continue
		}
		outFile.Close()

		fmt.Printf("  [+] Created %s\n", targetPath)
	}

	// Create a dummy placeholder in tests
	testFile := filepath.Join(projectName, "tests", "test_main.py")
	_ = os.WriteFile(testFile, []byte("def test_placeholder():\n    assert True\n"), 0644)
	fmt.Printf("  [+] Created tests/test_main.py\n")

	fmt.Printf("\nDone! Project '%s' initialized successfully.\n", projectName)
}
