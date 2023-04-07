import { createClient } from '@supabase/supabase-js'

const URL = 'https://uzfwikjblwxbudwojbfc.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6Zndpa2pibHd4YnVkd29qYmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA4NDM0NTksImV4cCI6MTk5NjQxOTQ1OX0.4Zw79Upe3lWXCMVxB--h7q3Chttffv0j5XUmw0Cg3Fc'

export const supabase = createClient(URL, API_KEY)