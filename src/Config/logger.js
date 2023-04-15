import bunyan from 'bunyan'

export const Logger = bunyan.createLogger({
  name: 'Ai-Tester',
  serializers: bunyan.stdSerializers,
})
