# NestJS API Demo with Swagger

A comprehensive NestJS API project with Swagger documentation, Docker support, and GitHub Actions CI/CD pipeline.

## Features

- **NestJS Framework**: Modern TypeScript-based Node.js framework
- **Swagger Documentation**: Auto-generated API documentation
- **Validation**: Request/response validation with class-validator
- **Docker Support**: Multi-stage Docker build for production
- **GitHub Actions**: Automated testing, building, and deployment
- **Security**: Non-root Docker user, vulnerability scanning
- **CORS Enabled**: Cross-origin resource sharing configured

## 📚 API Endpoints

### Users
- `POST /users` - Create a new user
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user information
- `DELETE /users/:id` - Delete user

### Products
- `POST /products` - Create a new product
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `GET /products/category/:category` - Get products by category
- `GET /products/in-stock` - Get products in stock
- `PATCH /products/:id` - Update product information
- `DELETE /products/:id` - Delete product

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Docker (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/adenxus-demo-nest.git
cd adenxus-demo-nest
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run start:dev
```

4. Access the API:
- Application: http://localhost:3000
- Swagger Documentation: http://localhost:3000/api

## 🐳 Docker Usage

### Build the Docker image:
```bash
docker build -t nestjs-api-demo .
```

### Run the container:
```bash
docker run -p 3000:3000 nestjs-api-demo
```

### Using Docker Compose:
```bash
docker-compose up -d
```

## Available Scripts

- `npm run start` - Start the application in production mode
- `npm run start:dev` - Start the application in development mode with hot reload
- `npm run start:debug` - Start the application in debug mode
- `npm run build` - Build the application for production
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run test:cov` - Run tests with coverage
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🔄 CI/CD Pipeline

The project includes a comprehensive GitHub Actions workflow that:

1. **Tests**: Runs linting, unit tests, and builds the application
2. **Builds**: Creates Docker image with multi-stage build
3. **Security**: Scans for vulnerabilities with Trivy
4. **Deploys**: Pushes to GitHub Container Registry
5. **SBOM**: Generates Software Bill of Materials

### Triggers
- Push to `main` or `develop` branches
- Pull requests to `main` branch
- Release publications

### Docker Image Tags
- Branch names: `main`, `develop`
- Pull requests: `pr-{number}`
- Semantic versions: `1.0.0`, `1.0`, `1`
- SHA commits: `{branch}-{sha}`

## 📊 API Documentation

Once the application is running, visit http://localhost:3000/api to access the interactive Swagger documentation. You can:

- Explore all available endpoints
- Test API calls directly from the browser
- View request/response schemas
- Download API specifications

## 🔧 Configuration

### Environment Variables
- `PORT` - Application port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

### Validation
The application uses global validation pipes with:
- Whitelisting: Only allowed properties are accepted
- Transformation: Automatic type conversion
- Strict mode: Reject non-whitelisted properties

## 🛡️ Security Features

- Non-root Docker user
- CORS configuration
- Input validation and sanitization
- Security headers (via Helmet)
- Vulnerability scanning in CI/CD

## 📁 Project Structure

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── main.ts
├── users/
│   ├── dto/
│   │   ├── create-user.dto.ts
│   │   └── update-user.dto.ts
│   ├── entities/
│   │   └── user.entity.ts
│   ├── users.controller.ts
│   ├── users.module.ts
│   └── users.service.ts
└── products/
    ├── dto/
    │   ├── create-product.dto.ts
    │   └── update-product.dto.ts
    ├── entities/
    │   └── product.entity.ts
    ├── products.controller.ts
    ├── products.module.ts
    └── products.service.ts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For questions and support, please open an issue in the GitHub repository.
