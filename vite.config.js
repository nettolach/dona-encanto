import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ATENÇÃO: Substitua 'SEU_USUARIO_GITHUB' pelo seu nome de usuário no GitHub
export default defineConfig({
  plugins: [react()],
  base: '/dona-encanto/'
})

