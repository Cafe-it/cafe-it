#!/bin/bash

# Cafeit API Contract Generator
# This script generates TypeScript types for all components from the OpenAPI specification

set -e

echo "🚀 Generating API contracts for Cafeit..."

# Create generated directories
mkdir -p generated
mkdir -p generated/client
mkdir -p generated/server
mkdir -p generated/shared

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Validate OpenAPI specification
echo "✅ Validating OpenAPI specification..."
npx swagger-cli validate openapi.yaml

# Generate TypeScript types
echo "🔧 Generating TypeScript types..."
npx openapi-typescript openapi.yaml -o generated/shared/types.ts

# Generate client SDK
echo "📱 Generating client SDK..."
npx @openapitools/openapi-generator-cli generate \
    -i openapi.yaml \
    -g typescript-fetch \
    -o generated/client \
    --additional-properties=supportsES6=true,npmName=@cafeit/client,npmVersion=1.0.0

# Generate server types
echo "🖥️  Generating server types..."
npx @openapitools/openapi-generator-cli generate \
    -i openapi.yaml \
    -g typescript-nestjs \
    -o generated/server \
    --additional-properties=supportsES6=true

# Copy shared types to client and server directories
echo "📋 Copying shared types..."
cp generated/shared/types.ts generated/client/src/types.ts
# Note: NestJS generator doesn't create src/ directory, so we'll copy to the root
cp generated/shared/types.ts generated/server/types.ts

# Create index files for easy imports
echo "📄 Creating index files..."

# Client index
cat > generated/client/index.ts << 'EOF'
export * from './src/types';
export * from './src/runtime';
export * from './src/apis';
export * from './src/models';
EOF

# Server index
cat > generated/server/index.ts << 'EOF'
export * from './types';
export * from './model';
export * from './api';
EOF

# Shared index
cat > generated/shared/index.ts << 'EOF'
export * from './types';
EOF

echo "✅ API contract generation completed!"
echo ""
echo "📁 Generated files:"
echo "  - generated/shared/types.ts (Shared TypeScript types)"
echo "  - generated/client/ (React client SDK)"
echo "  - generated/server/ (NestJS server types)"
echo ""
echo "🔗 Usage:"
echo "  - Client: import { Cafe, SeatLayout } from './generated/client'"
echo "  - Server: import { Cafe, SeatLayout } from './generated/server'"
echo "  - Shared: import { Cafe, SeatLayout } from './generated/shared'"
echo ""
echo "🔄 To regenerate: npm run generate:all" 