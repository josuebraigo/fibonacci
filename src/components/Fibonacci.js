import React from 'react';
import Header from './Header';


class Fibonacci extends React.Component {

    state = {
        number: 0,
        form: {
            num: '',
        }
    }

    handleChange = e => {

        let numbers = [0, 1];

        for(let i = 2; i < e.target.value; i++) {
            numbers[i] = numbers[i - 2] + numbers[i - 1];
        }

        this.setState({
            number: numbers[numbers.length - 1],
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render() {
        return (
            <div className="container d-flex flex-wrap justify-content-center">

            <Header />

            <form className="col-2">
                <div className="mb-3">
                    <label className="form-label">Enter a number</label>
                    <input onChange={this.handleChange} type="email" className="form-control" name="num" value={this.state.form.num}/>
                    {/* <div className="form-text">}</div> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Result</label>
                    <input type="email" className="form-control" value={this.state.number} disabled />
                    {/* <div className="form-text">}</div> */}
                </div>
            </form>
            </div>
        )
    }
}

export default Fibonacci;