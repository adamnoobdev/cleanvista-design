// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://xzzytdbscfivjkiqiwin.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6enl0ZGJzY2ZpdmpraXFpd2luIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0Mjg5MjksImV4cCI6MjA1OTAwNDkyOX0.faIpxoH_eXBmHod9NsGttUvMOaNMbsuLGvPmBDQDbq0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);