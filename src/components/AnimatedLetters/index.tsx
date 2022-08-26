import './index.scss'

const AnimatedLetters = (props: {
  letterClass: string
  strArray: string[]
  idx: number
}) => {
  const { letterClass, strArray, idx } = props
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
