import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/en'
import parseObject from '../utils/parseObject'

const IdentifierJsonEditor = (props) => {
    const { record, where } = props
    const apiId = record.params?.api

    const placeholder = createPlaceholder(apiId, record, where)

    record.params.requestIdentifier = placeholder

    return (

        <div className="form-group__FormGroup-sc-dpyqjh-0 frCjYo">
            <label htmlFor="url" required className="label__Label-sc-o90s7d-0 jtfEBv adminjs_Label">Request Identifier</label>
            <JSONInput
                id='a_unique_id'
                placeholder={placeholder}
                viewOnly={where == "show" ? true : false}
                colors={{
                    default: "#000000",
                    background: "#FCFDFD",
                    background_warning: "#FEECEB",
                    string: "#FA7921",
                    number: "#70CE35",
                    colon: "#49B8F7",
                    keys: "#59A5D8",
                    keys_whiteSpace: "#835FB6",
                    primitive: "386FA4"
                }}
                locale={locale}
                height='300px'
                waitAfterKeyPress={1200}
                onChange={(data) => {
                    try {
                        //console.log('onchange')
                        record.params.requestIdentifier = JSON.parse(data.json)
                    } catch (e) {
                        console.error("Json incorreto: " + e.message)
                    }

                }}
            />
            <div className="text__Text-sc-wqowgj-0 form-message__FormMessage-sc-ns8om8-0 fPFvgK jNCBSG adminjs_Text"></div>

        </div>

    )
}

const createPlaceholder = (apiId = null, record, where) => {
    let obj = {}

    // conferindo se é show ou edit
    if (where == 'show' || record.id) {
        const requestIdentifierObj = {}

        for (const key in record.params) {
            if (key.includes("requestIdentifier.")) {
                requestIdentifierObj[key] = record.params[key]
            }
        }

        const obj = parseObject(requestIdentifierObj)
        return obj.requestIdentifier
    }

    // conferindo se o usuário já selecionou uma api
    if (apiId) {
        const apiContent = record.populated.api.params
        let identifierKey

        for (let key in apiContent) {
            if (key.includes("identifierKeys")) {
                identifierKey = apiContent[key]
                obj[identifierKey] = ""
            }
        }

        return obj
    }

    obj.exemplo = 'exemple'
    return obj

}

export default IdentifierJsonEditor;
