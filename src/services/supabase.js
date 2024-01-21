import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://glnunvwzeurnrcutxxnq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsbnVudnd6ZXVybnJjdXR4eG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0MDk2MDYsImV4cCI6MjAxOTk4NTYwNn0.MPNqxxnyW5NN3AXJ1xUekQfY9apea0k1iNCwqKIy3_U";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
