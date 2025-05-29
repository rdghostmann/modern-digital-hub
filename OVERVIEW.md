Return BlogStore-Overview.md of the web app. Showing 
## Authentication System

- **Login page** with demo accounts for all roles
- **Role-based authentication** with proper redirects
- **User management** with localStorage persistence


## 👨‍💼 Admin Dashboard Features

- **User Management**: Add, edit, delete, and deactivate users
- **Role Assignment**: Assign admin, writer, or user roles
- **Blog Post Management**: View, edit, delete all posts from writers
- **Analytics Overview**: Stats on users, posts, orders, and revenue
- **User Listing**: Complete user directory with status management


## ✍️ Writer Dashboard Features

- **Personal Blog Management**: View only their own posts
- **Create New Posts**: Rich form for creating blog content
- **Edit Posts**: Update existing blog posts
- **Draft/Published Status**: Manage post publication status
- **Writing Analytics**: Track personal post statistics


## 🛒 User Order Dashboard Features

- **Order History**: Complete order tracking and history
- **Order Details**: Detailed view of individual orders with items
- **Order Status Tracking**: Visual progress tracking (Processing → Shipped → Delivered)
- **Shipping Information**: Address and delivery details
- **Order Analytics**: Personal spending and order statistics


## 🎯 Key Features Implemented

### Admin Capabilities:

- Add users with role assignment (admin/writer/user)
- View and manage all users with status controls
- Delete, update, and deactivate user accounts
- Manage all blog posts from writers
- Delete and update any blog post
- Dashboard analytics and overview


### Writer Capabilities:

- View personal blog posts only
- Create new blog posts with rich content
- Edit and update own posts
- Manage draft/published status
- Personal writing statistics


### User Capabilities:

- View complete order history
- Track order status with visual progress
- View detailed order information
- Personal spending analytics
- Quick access to store and profile


## 🔧 Technical Implementation

- **Role-based routing** with proper authentication guards
- **Responsive dashboard layouts** with mobile-friendly navigation
- **Real-time state management** for all data operations
- **Toast notifications** for user feedback
- **Mock data providers** for users, blog posts, and orders
- **Consistent UI/UX** across all dashboard interfaces


## 🚀 Getting Started

### Demo Accounts

- **Admin**: `admin@example.com` (full system access)
- **Writer**: `writer@example.com` (blog management)
- **User**: `user@example.com` (shopping and orders)
- **Password**: Any value works for demo


### Key URLs

- `/` - Home page with featured content
- `/login` - Authentication page
- `/admin` - Admin dashboard (admin role required)
- `/writer` - Writer dashboard (writer role required)
- `/dashboard` - User dashboard (user role required)
- `/blog` - Blog listing and posts
- `/store` - E-commerce product catalog
- `/videos` - Video platform and library


---

## 🎨 Design Features

- **Modern UI** with clean, professional design
- **Dark/Light theme** support with system preference detection
- **Responsive design** optimized for all screen sizes
- **Consistent branding** across all pages and dashboards
- **Intuitive navigation** with role-based menu items
- **Visual feedback** through toast notifications and loading states


The BlogStore web application provides a comprehensive platform combining blog management, e-commerce functionality, and video content with sophisticated role-based dashboards for different user types.