const imgs = [
  {
    title: '奉旨睡觉',
    images: ['0.jpg', '1.jpg', '2.jpg']
  }
].map(el => {
  el.images = el.images.map(item => `images/${item}`)
  return el
})

export default imgs
