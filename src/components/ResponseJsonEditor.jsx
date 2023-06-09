import JSONInput from 'react-json-editor-ajrm'
import locale from 'react-json-editor-ajrm/locale/en'
import parseObject from '../utils/parseObject'

const ResponseJsonEditor = (props) => {
    const { record, where } = props

    const placeholder = createPlaceholder(record, where)

    record.params.response = placeholder


    return (

        <div className="form-group__FormGroup-sc-dpyqjh-0 frCjYo">
            <label htmlFor="url" required className="label__Label-sc-o90s7d-0 jtfEBv adminjs_Label">Response</label>
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
                        delete record.params.response
                        record.params.response = JSON.parse(data.json)
                        console.log(record.params.response)
                    } catch (e) {
                        console.log("Json incorreto: " + e.message)
                    }

                }}
            />
            <div className="text__Text-sc-wqowgj-0 form-message__FormMessage-sc-ns8om8-0 fPFvgK jNCBSG adminjs_Text"></div>

        </div>

    )


}

const createPlaceholder = (record, where) => {
    let obj = {}

    // conferindo se é show ou edit
    if (where == 'show' || record.id) {
        const responseObj = {}

        for (const key in record.params) {
            if (key.includes("response.")) {
                responseObj[key] = record.params[key]
            }
        }

        const obj = parseObject(responseObj)
        return obj.response
    }

    obj.example1 = 'example1'
    return obj

}



export default ResponseJsonEditor;
