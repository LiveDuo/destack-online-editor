import { ContentProvider } from 'destack'
import 'grapesjs/dist/css/grapes.min.css'

export default function Page(props) { return <ContentProvider {...props} showEditorInProd={true}/> }