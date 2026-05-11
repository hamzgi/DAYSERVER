const requireEnv = (
  key:
    | 'VITE_SUPABASE_PROJECT_ID'
    | 'VITE_SUPABASE_ANON_KEY'
    | 'VITE_SUPABASE_FUNCTION_NAME',
) => {
  const value = import.meta.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

export const projectId = requireEnv('VITE_SUPABASE_PROJECT_ID')
export const publicAnonKey = requireEnv('VITE_SUPABASE_ANON_KEY')
export const functionName = requireEnv('VITE_SUPABASE_FUNCTION_NAME')
