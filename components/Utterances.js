import React from 'react'

function Utterances() {
  return (
    <section
      ref={(elem) => {
        if (!elem) {
          return
        }
        const scriptElement = document.createElement('script')
        scriptElement.src = 'https://utteranc.es/client.js'
        scriptElement.async = true
        scriptElement.setAttribute('repo', 'KwonCheulJin/charles-nextjs-blog')
        scriptElement.setAttribute('issue-term', 'pathname')
        scriptElement.setAttribute('theme', 'github-dark')
        scriptElement.crossOrigin = 'anonymous'
        elem.appendChild(scriptElement)
      }}
    />
  )
}

export default React.memo(Utterances)
