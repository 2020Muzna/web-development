// supabase-config.js
import {createClient}  from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

export const supabase = createClient(
  'https://lvjkzojdqnxivbtzsxqc.supabase.co', // 🔁 Replace with your Supabase URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2amt6b2pkcW54aXZidHpzeHFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2NzExOTEsImV4cCI6MjA2MzI0NzE5MX0.l6OYEQ1NikNOISPTdoV0kG34QtRZLKDtzuGcH7h8VqI'                     // 🔁 Replace with your Supabase anon key
);

