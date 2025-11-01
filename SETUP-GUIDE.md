# Setup Guide: TypeScript + Tailwind CSS + React Bits + ShadCN

Panduan lengkap untuk setup project dengan stack modern: TypeScript, Tailwind CSS, React Bits, dan ShadCN UI.

## 🚀 Stack Overview

- **TypeScript** - Type safety dan developer experience yang lebih baik
- **Tailwind CSS** - Utility-first CSS framework
- **React Bits** - Collection of copy-paste React components
- **ShadCN UI** - Beautifully designed components built with Radix UI and Tailwind CSS

## 📋 Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- Git

## 🛠️ Setup Steps

### 1. Create New Project (Jika Mulai dari Awal)

```bash
# Dengan Vite + TypeScript
npm create vite@latest my-project -- --template react-ts
cd my-project

# Atau dengan Next.js + TypeScript
npx create-next-app@latest my-project --typescript --tailwind --eslint
cd my-project
```

### 2. Install Tailwind CSS

```bash
# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Konfigurasi `tailwind.config.js`:**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

**Update `src/index.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### 3. Setup ShadCN UI

```bash
# Install ShadCN CLI
npx shadcn-ui@latest init
```

**Pilih konfigurasi:**

- Would you like to use TypeScript? → Yes
- Which style would you like to use? → Default
- Which color would you like to use as base color? → Slate
- Where is your global CSS file? → src/index.css
- Would you like to use CSS variables for colors? → Yes
- Where is your tailwind.config.js located? → tailwind.config.js
- Configure the import alias for components? → src/components
- Configure the import alias for utils? → src/lib/utils

**Install dependencies:**

```bash
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react
```

### 4. Install Additional Dependencies

```bash
# Untuk React Bits dan utilities
npm install @radix-ui/react-slot @radix-ui/react-separator
npm install framer-motion # Untuk animasi
npm install react-hook-form @hookform/resolvers zod # Untuk forms
npm install date-fns # Untuk date utilities
```

### 5. Setup Utils dan Components

**Buat `src/lib/utils.ts`:**

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Install komponen ShadCN yang sering digunakan:**

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add avatar
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add toast
```

### 6. Setup React Bits Components

**Buat folder untuk React Bits:**

```bash
mkdir -p src/components/react-bits
```

**Contoh komponen React Bits - `src/components/react-bits/lanyard.tsx`:**

```typescript
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface LanyardData {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    display_name: string;
  };
  discord_status: "online" | "idle" | "dnd" | "offline";
  activities: Array<{
    id: string;
    name: string;
    type: number;
    state?: string;
    details?: string;
    assets?: {
      large_image?: string;
      large_text?: string;
    };
  }>;
  listening_to_spotify: boolean;
  spotify?: {
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  };
}

interface LanyardProps {
  userId: string;
  showSpotify?: boolean;
  showActivities?: boolean;
  className?: string;
}

export function Lanyard({
  userId,
  showSpotify = true,
  showActivities = true,
  className,
}: LanyardProps) {
  const [data, setData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLanyardData = async () => {
      try {
        const response = await fetch(
          `https://api.lanyard.rest/v1/users/${userId}`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchLanyardData();
    const interval = setInterval(fetchLanyardData, 30000);
    return () => clearInterval(interval);
  }, [userId]);

  const getStatusColor = (status: string) => {
    const colors = {
      online: "bg-green-500",
      idle: "bg-yellow-500",
      dnd: "bg-red-500",
      offline: "bg-gray-500",
    };
    return colors[status as keyof typeof colors] || colors.offline;
  };

  if (loading) {
    return (
      <Card className={cn("w-full max-w-md", className)}>
        <CardContent className="p-6">
          <div className="animate-pulse">Loading Discord status...</div>
        </CardContent>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className={cn("w-full max-w-md border-red-200", className)}>
        <CardContent className="p-6">
          <p className="text-red-600">Failed to load Discord status</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("w-full max-w-md", className)}>
      <CardContent className="p-6 space-y-4">
        {/* User Info */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarImage
                src={`https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png?size=128`}
                alt={data.discord_user.display_name}
              />
              <AvatarFallback>
                {data.discord_user.display_name[0]}
              </AvatarFallback>
            </Avatar>
            <div
              className={cn(
                "absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white",
                getStatusColor(data.discord_status)
              )}
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              {data.discord_user.display_name}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {data.discord_status.charAt(0).toUpperCase() +
                data.discord_status.slice(1)}
            </Badge>
          </div>
        </div>

        {/* Spotify */}
        {showSpotify && data.listening_to_spotify && data.spotify && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <img
                src={data.spotify.album_art_url}
                alt={data.spotify.album}
                className="h-12 w-12 rounded-md"
              />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">
                  🎵 {data.spotify.song}
                </p>
                <p className="text-xs text-gray-600 truncate">
                  by {data.spotify.artist}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  on {data.spotify.album}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Activities */}
        {showActivities && data.activities && data.activities.length > 0 && (
          <div className="space-y-2">
            {data.activities
              .filter((activity) => activity.type !== 2)
              .slice(0, 2)
              .map((activity, index) => (
                <div
                  key={index}
                  className="bg-blue-50 border border-blue-200 rounded-lg p-3"
                >
                  <div className="flex items-center space-x-3">
                    {activity.assets?.large_image && (
                      <img
                        src={
                          activity.assets.large_image.startsWith("mp:")
                            ? `https://media.discordapp.net/${activity.assets.large_image.slice(
                                3
                              )}`
                            : `https://cdn.discordapp.com/app-assets/${activity.id}/${activity.assets.large_image}.png`
                        }
                        alt={activity.name}
                        className="h-10 w-10 rounded-md"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">
                        🎮 {activity.name}
                      </p>
                      {activity.details && (
                        <p className="text-xs text-gray-600 truncate">
                          {activity.details}
                        </p>
                      )}
                      {activity.state && (
                        <p className="text-xs text-gray-500 truncate">
                          {activity.state}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
```

### 7. Contoh Penggunaan

**`src/App.tsx`:**

```typescript
import { Lanyard } from "@/components/react-bits/lanyard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-600">
            Built with TypeScript, Tailwind CSS, React Bits & ShadCN UI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Hi, I'm a developer passionate about creating amazing user
                experiences.
              </p>
              <Button>Get in Touch</Button>
            </CardContent>
          </Card>

          <div>
            <h3 className="text-xl font-semibold mb-4">Discord Status</h3>
            <Lanyard
              userId="YOUR_DISCORD_USER_ID"
              showSpotify={true}
              showActivities={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

### 8. TypeScript Configuration

**Update `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 9. Vite Configuration (jika menggunakan Vite)

**Update `vite.config.ts`:**

```typescript
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## 🎯 Keuntungan Stack Ini

1. **Type Safety** - TypeScript memberikan type checking yang kuat
2. **Rapid Development** - Tailwind CSS untuk styling cepat
3. **Component Library** - ShadCN UI untuk komponen yang konsisten
4. **Copy-Paste Components** - React Bits untuk komponen siap pakai
5. **Modern Tooling** - ESLint, Prettier, dan tools modern lainnya
6. **Excellent DX** - Developer experience yang sangat baik

## 📚 Resources

- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [ShadCN UI Docs](https://ui.shadcn.com/)
- [React Bits](https://reactbits.dev/)
- [Radix UI Docs](https://www.radix-ui.com/)

## 🚀 Next Steps

1. Setup project dengan langkah-langkah di atas
2. Explore komponen ShadCN UI yang tersedia
3. Browse React Bits untuk komponen tambahan
4. Customize theme Tailwind sesuai kebutuhan
5. Build aplikasi yang amazing! 🎉
