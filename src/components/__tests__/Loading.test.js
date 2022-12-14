import {render, screen, cleanup} from '@testing-library/react'
import Loading from '../Loading'

test('Should render Loading component', () => {
    render(<Loading/>)
    const loadingElement = screen.getByTestId('loading-1')
    expect(loadingElement).toBeInTheDocument()
})