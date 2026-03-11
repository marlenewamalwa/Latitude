export default async function handler(req, res) {

const response = await fetch("https://latitudeltd12.wixstudio.com/latitudeblog/blog-feed.xml")

const xml = await response.text()

res.setHeader("Cache-Control","s-maxage=3600")

res.status(200).send(xml)

}