import React from 'react';
import PropTypes from 'prop-types';

const CustomUrl = (props) => {
    const { record, where } = props;
    const url = record?.params?.project && record?.params?.apiName ? `http://localhost:5000/findMock/${record?.params?.project}-${record?.params?.apiName}` : 'URL da API mock'
    record.params.url = `${record?.params?.project}-${record?.params?.apiName}`

    if (where == "show") {
        return url
    }

    return (

        <div className="form-group__FormGroup-sc-dpyqjh-0 frCjYo">
            <label htmlFor="url" required className="label__Label-sc-o90s7d-0 jtfEBv adminjs_Label">Url</label>
            <input id="url" name="url" required className="input__Input-sc-y0u0lk-0 cKQyjl adminjs_Input" value={url} readOnly />
            <div className="text__Text-sc-wqowgj-0 form-message__FormMessage-sc-ns8om8-0 fPFvgK jNCBSG adminjs_Text"></div>
        </div>

    )
}

CustomUrl.propTypes = {
    record: PropTypes.shape({
        params: PropTypes.shape({
            apiName: PropTypes.string,
            project: PropTypes.string
        }),
    }),
}

export default CustomUrl