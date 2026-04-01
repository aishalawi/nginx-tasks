# Nginx Tasks - Complete Implementation

A comprehensive implementation of Nginx covering reverse proxy, load balancing, SSL/TLS, multi-site hosting, and advanced monitoring on AWS EC2.

## Server Details
- **Instance ID:** `i-0343ddb105325e52f`
- **Public IP:** `98.93.241.164`
- **OS:** Amazon Linux

---

## Tasks Completed

### Task 1: Nginx Fundamentals & Reverse Proxy
- Nginx installation and service management
- Static content serving with root and index directives
- Reverse proxy configuration with custom headers
- Custom error pages (404, 403)
- Modular configuration using include directive
- Nginx variables: `$host`, `$remote_addr`, `$request_uri`
- Security headers implementation
- Basic authentication for restricted areas

### Task 2: Advanced Nginx Features
- **Load Balancing:** Round Robin, Least Connections, IP Hash
- **SSL/TLS:** Self-signed certificates, HTTP to HTTPS redirect
- **URL Management:** Internal rewrites, permanent redirects, regex transformations
- **Performance:** Proxy caching, rate limiting (10r/s), connection limits (10 per IP)

### Task 3: Multi-Site Hosting & Monitoring
- Virtual hosting with separate server blocks
- Custom access and error logs per site
- Detailed log format with timing information
- Live log monitoring and error diagnosis

## Repository Structure
```
nginx-tasks/
├── README.md # Project documentation
├── .gitignore # Git ignore rules
│
├── configurations/ # Nginx configuration files
│ ├── nginx.conf # Main configuration
│ ├── conf.d/ # Server blocks
│ │ ├── mysite.conf # Task 1 static site
│ │ ├── site1.conf # Task 3 - Site One
│ │ ├── site2.conf # Task 3 - Site Two
│ │ └── upstream.conf # Load balancing upstream groups
│ └── snippets/ # Include snippets
│ └── security-headers.conf # Security headers
│
├── web-content/ # Static websites
│ ├── mysite/ # Task 1 static site
│ │ └── index.html
│ ├── site1/ # Task 3 - Site One
│ │ └── index.html
│ └── site2/ # Task 3 - Site Two
│ └── index.html
│
├── backend-apps/ # Node.js backend applications
│ ├── backend.js # Backend on port 3000
│ └── backend/ # Load balancing backends
│ ├── server_8080.js # Backend on port 8080
│ ├── server_8081.js # Backend on port 8081
│ └── server_8082.js # Backend on port 8082
│
├── error-pages/ # Custom error pages
│ ├── 404.html
│ └── 403.html
│
├── scripts/ # Automation scripts
│ ├── setup.sh # One-click setup
│ └── start-backends.sh # Start all backends
│
└── documentation/ # Documentation
└── Nginx Tasks.docx # Detailed task documentation
```
## Key Configurations

### Load Balancing Algorithms

| Algorithm | Configuration | Use Case |
|-----------|--------------|----------|
| Round Robin | `server 127.0.0.1:8080;` | Default, even distribution |
| Least Connections | `least_conn;` | Routes to least busy server |
| IP Hash | `ip_hash;` | Session persistence |

### Security Headers
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer" always;

Rate Limiting
Rate: 10 requests per second

Burst: 20 requests

Connection Limit: 10 connections per IP

