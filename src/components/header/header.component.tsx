import Button from '../button/button.component'
import { Title } from '../title/title.component'

export const Header = () => {

  const onClick = () => {
    console.log('click!')
  }

  return (
    <div className="header">
      <Title />
      <Button
        border="10px"
        color="grey"
        height="200px"
        onClick={() => onClick()}
        radius="10%"
        width="200px"
        children="Click me"
      />
    </div>
  )
}
