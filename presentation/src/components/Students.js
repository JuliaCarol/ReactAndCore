import React, { Component } from 'react';
import Modal from 'tg-modal';

export default class Students extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: [],
            newStudentIsOpen: false,
            editOrNewStudent: {
                Name: '',
                Age: 0,
                Grade: ''
            }
        };

        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        var thisHeaders = new Headers();
        var requestInfo = {
            method: 'GET',
            headers: thisHeaders,
            mode: 'cors',
            cache: 'default'
        };

        var thisRequest = new Request('http://localhost:61414/api/Students', requestInfo);
        fetch(thisRequest)
            .then(results => { return results.json(); })
            .then(data => {
                this.setState((prevState, props) => ({
                    students: data
                }));
            });
    }

    openModal(event) {
        event.preventDefault();
        this.setState((prevState, props) => ({
            newStudentIsOpen: !prevState.newStudentIsOpen
        }));
    }

    saveStudent(event) {
        event.preventDefault();
        this.forceUpdate();
        
        var myHeaders = new Headers();        
        myHeaders.append('Content-Type', 'application/json');

        var requestInfo = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(this.state.editOrNewStudent)
        };

        var thisRequest = new Request('http://localhost:61414/api/Students', requestInfo);
        fetch(thisRequest)
            .then(results => { return results.json(); })
            .then(data => {
                this.setState((prevState, props) => ({
                    editOrNewStudent: {},
                    newStudentIsOpen: false
                }));
            });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="three columns">
                        <button className="button-primary" style={newStudent} onClick={e => this.openModal(e)}>
                            New Student
                        </button>
                    </div>
                </div>
                <br/>
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map((m, i) => 
                            <tr key={i}>
                                <td>{m.name}</td>
                                <td>{m.age}</td>
                                <td>{m.grade}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <Modal  isOpen={this.state.newStudentIsOpen} 
                        autoWrap    
                        isBasic 
                        title="New Student"
                        onCancel={this.openModal}>
                    <form>
                        <div className="row" style={{paddingTop: '1em'}}>                
                            <div className="six columns">
                                <label htmlFor="inpName">Name</label>
                                <input className="u-full-width" id="inpName" required="true" type="text" placeholder="Name"
                                       onChange={(e) => { this.state.editOrNewStudent.Name = e.target.value  }}/>
                            </div>
                            
                            <div className="two columns">
                                <label htmlFor="inpAge">Age</label>
                                <input className="u-full-width" id="inpAge" required="true" type="number" placeholder="0"
                                       onChange={(e) => { this.state.editOrNewStudent.Age = e.target.value  }}/>
                            </div>

                            <div className="four columns">
                                <label htmlFor="inpGrade">Grade</label>
                                <input className="u-full-width" id="inpGrade" required="true" type="text" placeholder="Grade"
                                       onChange={(e) => { this.state.editOrNewStudent.Grade = e.target.value  }}/>
                            </div>
                        </div>
                        <div className="row" style={{paddingTop: '1em'}}>
                            <button className="button-primary" style={newStudent} onClick={e => this.saveStudent(e)}>
<<<<<<< HEAD
                                Save or Update
=======
                                Update or Save
>>>>>>> 8764197e6f38212e3e7b990a2b35e8de33318ed5
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
};

var newStudent = {
    width: '100%',
}
