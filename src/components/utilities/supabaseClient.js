import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qtzwzoszjisovyydpjww.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0end6b3N6amlzb3Z5eWRwand3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQyODc5NTksImV4cCI6MjAwOTg2Mzk1OX0.jVDzrA0WmZnpnK3x7T0Jno4siKt_vwcZrC2rwV01il8';
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
