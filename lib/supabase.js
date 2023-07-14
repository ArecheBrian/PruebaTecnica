import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://gymvkfldnmipbfaavwhn.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5bXZrZmxkbm1pcGJmYWF2d2huIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNTg0NzgsImV4cCI6MjAwNDkzNDQ3OH0.rca-s7PZvQIk9QDobzuStnlSKqKdDmHcWhGWuM0-RkY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)