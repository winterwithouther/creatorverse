import { createClient } from "@supabase/supabase-js";

const URL = 'https://xjomdfqrwhxnlucvajxv.supabase.co';
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqb21kZnFyd2h4bmx1Y3Zhanh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0OTI2MjcsImV4cCI6MjA2OTA2ODYyN30.RjWshCUvxM0YcBlm1KWgOUNikGHs3KPVx4f97yBm_2Y";

export const supabase = createClient(URL, API_KEY);

