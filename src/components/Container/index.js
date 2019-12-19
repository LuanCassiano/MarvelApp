import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export default styled(LinearGradient).attrs({
    colors: ['#52110A', '#69160D'],
    start: {x: 0, y: 0},
    end: {x: 0, y: 1},
})`
    flex: 1;
`
