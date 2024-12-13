import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://myctctqbziebsxvilodt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15Y3RjdHFiemllYnN4dmlsb2R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwOTk0NjcsImV4cCI6MjA0OTY3NTQ2N30.To4vSNC1pyvzINFbRvnwtc40MD6IwVAVs5CamLHeWm8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
