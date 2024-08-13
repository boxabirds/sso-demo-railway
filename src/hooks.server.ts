import { SvelteKitAuth } from "@auth/sveltekit"
import Google from "@auth/core/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const result = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })
  ],
  secret: process.env.AUTH_SECRET,
})
export const handle =result.handle;