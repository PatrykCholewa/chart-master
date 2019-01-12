import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Input from "@material-ui/core/Input/Input";
import React from "react";

const getCurrentLabelText = label => label !== undefined && label.length > 2 ? label.substring(0, label.length - 2) : "";

const createLabelByText = text => text + "\n⬇";

class MyInputCustomLabelDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: getCurrentLabelText(props.currentLabel)
        }
    }

    handleClose(event) {
        // this.props.setLabelForData(createLabelByText(this.state.label), this.props.dataSetIndex, this.props.dataIndex);
        this.props.handleClose();
    }

    render() {
        return (
            <Dialog onClose={this.handleClose} open={this.props.open} aria-labelledby="simple-dialog-title">
                <DialogTitle id="simple-dialog-title">INSERT CUSTOM LABEL</DialogTitle>
                <div>
                    <FormControl>
                        <Input autoFocus={true}
                               value={this.state.label}
                               onChange={event => this.setState({label: event.target.value})}
                               onBlur={event => this.handleClose(event)}/>
                    </FormControl>
                </div>
            </Dialog>
        );
    }

}

export default MyInputCustomLabelDialog;