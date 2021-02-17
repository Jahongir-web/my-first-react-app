import {useState} from 'react'
import "../App.css"

function Main() {

  const [x, setX] = useState(0)

  const [y, setY] = useState(0)

  return (

    <>
    <main>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus dolorem nesciunt quos explicabo voluptate quia amet rem maxime dolores, optio rerum cum mollitia quibusdam nobis placeat iusto obcaecati aliquid modi ducimus exercitationem dignissimos perferendis? Maiores deleniti tenetur libero nihil, quae at velit! Cupiditate quas neque nemo nobis asperiores cumque labore, quisquam iure eligendi dicta nisi sint quod consequatur quam, necessitatibus repudiandae assumenda vel possimus? Commodi voluptatem inventore facilis nam maiores explicabo mollitia laboriosam eum officiis, consequatur tenetur veritatis optio alias illum! Illum autem reiciendis assumenda nam recusandae in alias quaerat sequi impedit perferendis qui eius, libero, doloribus perspiciatis asperiores magni nemo non, quisquam voluptatum nihil eaque quae enim ipsa voluptatibus! Quibusdam nesciunt maiores eveniet sint laudantium modi laboriosam voluptatibus nisi doloremque doloribus? Fuga velit sit itaque alias adipisci tempora pariatur molestiae nobis veniam ullam, impedit officia provident delectus hic reprehenderit nesciunt, natus repellat? Facere inventore dignissimos unde provident quam.</p>

    <h1>This supper calc👇</h1>

    <h1>{x} + {y} = { x + y }</h1>

    <input onChange={e => setX(e.target.value - 0)} />
    <input onChange={e => setY(e.target.value - 0)} />

    </main>
    </>
    )
  }

  export default Main
