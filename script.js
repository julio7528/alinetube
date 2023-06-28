const api = "api/cards.json"

fetch(api)
  .then(response => response.json())
  .then(data => {
    $.each(data.listStreaming, function(_i, item) {
      createCard(item)
    })
  })

function createCard(item) {
  let {
    category,
    link,
    title,
    target,
    image,
    imageAlt,
    description
  } = item
  
  if (target === '')
    target = '_blank'

  const innerHTML = `
    <a class="section" href="`+link+`" target="`+target+`">
      <div class="session-info"></div>
        <h4>`+title+`</h4>

        <img src="`+image+`" alt="`+imageAlt+`">

        <p>`+description+`</p>
    </a>
  `

  let card = 'tv-open'

  if (category === 'channelNews')
    card = 'channel-news'

  if (category === 'streaming')
  card = 'streaming'

  if (category === 'outroStreaming')
  card = 'outroStreaming'

  $('.' + card).append(innerHTML)
}

// {
//   "id": "",
//   "category": "",
//   "title": "",
//   "link": "",
//   "target": "",
//   "image": "",
//   "imageAlt": "",
//   "description": ""
// }
