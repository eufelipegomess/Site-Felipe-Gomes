import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://uoolgmgpfelnfwhokfii.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvb2xnbWdwZmVsbmZ3aG9rZmlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzExMTgyODEsImV4cCI6MjA4NjY5NDI4MX0.ZhYQLc-N-wM1nGcilliFD6yD6mS6xbSwO_VV_zKfEnc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);