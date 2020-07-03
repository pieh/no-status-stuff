const fetch = require(`node-fetch`)

let callCount = 0

const REFRESH_WEBHOOK =
  process.env.REFRESH_WEBHOOK || `http://localhost:8000/__refresh`

exports.sourceNodes = ({ actions, reporter }) => {
  // const activity = reporter.activityTimer(`SET_STATUS repro`)

  // activity.start()

  // just so gatsby doesn't complain about source plugin not doing anything
  actions.createNode({
    id: `foo`,
    internal: {
      type: `Foo`,
      contentDigest: `foo`,
    },
  })

  if (callCount > 0) {
    // throw new Error(`we didn't call activity.end(), oops`)
    var cur = 0 // 167772160
    var bcast = 184549375
    var addresses = []
    while (cur <= bcast) {
      cur += 1
      addresses.push(cur)
    }
    addresses.length
    addresses
  } else {
    // setTimeout(() => {
    //   fetch(REFRESH_WEBHOOK, {
    //     method: `POST`,
    //   })
    // }, 15000)
  }

  // activity.end()

  callCount++
}
