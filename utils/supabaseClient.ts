import { createClient } from '@supabase/supabase-js';

// Safe environment variable access for Vite
const getEnvVar = (key: string, fallback: string = ''): string => {
  if (import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  return fallback;
};

// Configure suas variáveis de ambiente no arquivo .env (ex: .env.local)
// VITE_SUPABASE_URL=sua_url
// VITE_SUPABASE_ANON_KEY=sua_chave
const SUPABASE_URL = getEnvVar('VITE_SUPABASE_URL', 'https://placeholder-project.supabase.co');
const SUPABASE_ANON_KEY = getEnvVar('VITE_SUPABASE_ANON_KEY', 'placeholder-key');

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);