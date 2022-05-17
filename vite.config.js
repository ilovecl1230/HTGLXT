import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  //改变端口号
  server:{
    host:'localhost',
    port:8080,
    proxy:{
      "/api":{
        target:"http://localhost:3000"
      }
    }
  },
  plugins: [vue()]
})

