module.exports = {
  // 应用程序列表，pm2可以管理多个程序
  apps: [
    {
      name: 'www', // 应用进程名称
      script: './bin/www', // 启动脚本路径
      ignore_watch: ['node_modules', 'logs'], // 忽视监听的文件
      args: '', // 传递给脚本的参数
      instances: 1, // 应用启动实例个数，仅在cluster模式有效，默认为fork
      autorestart: true,
      watch: true, // 监听重启，启用情况下，文件夹或子文件夹下变化应用自动重启
      max_memory_restart: '1G', // 最大内存限制数，超出自动重启
      // 测试环境
      env_staging: {
        'PORT': 9528,
        'NODE_ENV': 'staging'
      },
      // 生产环境
      env_production: {
        'PORT': 9529,
        'NODE_ENV': 'production'
      }
    }
  ]
}
