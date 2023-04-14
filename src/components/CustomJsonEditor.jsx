import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/en'

const CustomJsonEditor = (props) => {
    const { record } = props

    return <JSONInput
        id='a_unique_id'
        placeholder={{ "a": "b" }}
        // theme="light_mitsuketa_tribute"
        colors={{}}
        locale={locale}
        height='500px'
        waitAfterKeyPress={1500}
        onChange={data => record.params.response = JSON.parse(data.json)}
    />
}

export default CustomJsonEditor;
