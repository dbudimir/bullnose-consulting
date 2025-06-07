# Email Setup Instructions

## ✅ Completed Setup

The following files have been created and configured:

1. **Dependencies**: `nodemailer` and `@types/nodemailer` installed
2. **Environment Variables**: `.env.local` created with placeholder values
3. **API Route**: `src/pages/api/send-email.ts` - handles email sending
4. **Contact Component**: `src/components/Contact.tsx` - beautiful contact form with Section wrapper
5. **Contact Page**: `src/pages/contact.tsx` - example usage page
6. **Git Ignore**: Updated to exclude `.env.local` files

## 🔧 Required Configuration

To complete the email setup, you need to:

### 1. Update Environment Variables

Edit `.env.local` file with your actual values:

```env
EMAIL_USER=your-actual-email@yourcompany.com
EMAIL_APP_PASSWORD=your-actual-16-character-app-password
EMAIL_TO=contact@yoursite.com
```

### 2. Google Workspace Setup

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this 16-character password in `EMAIL_APP_PASSWORD`

## 📧 Testing

1. Update the environment variables
2. Start the development server: `pnpm run dev`
3. Visit `http://localhost:5000/contact`
4. Test the contact form

## 🚀 Usage

### Using the Contact Component

```tsx
import Contact from "../components/Contact";

export default function YourPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}
```

### Component Features

- ✅ Uses the existing Section wrapper
- ✅ Responsive design with styled-components
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ TypeScript support
- ✅ Modern, accessible design

## 🔒 Security Notes

- Environment variables are properly gitignored
- Email validation on both client and server
- Rate limiting recommended for production
- Input sanitization included

## 📱 Next Steps

1. Configure your actual email credentials
2. Test the functionality
3. Consider adding the Contact component to your main pages
4. Deploy with environment variables configured on your hosting platform

The Contact component is ready to use and matches your existing design system!
