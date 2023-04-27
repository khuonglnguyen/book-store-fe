import React, { useState } from 'react';
import styled from "styled-components";

function Add({ setHide }) {
    // const uri = 'mongodb+srv://nguyennhathao11c2:Hao%407708801314520@cluster0.wq1pija.mongodb.net/?retryWrites=true&w=majority';
    // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     client.connect(err => {
    //         const collection = client.db("test").collection("user");
    //         collection.insertOne({ 
    //             name: event.target.text.value,
    //             dob: event.target.date.value,
    //             desc: event.target.description.value
    //         }, function(err, res) {
    //             if (err) throw err;
    //             console.log("1 document inserted");
    //         });
    //         client.close();
    //     });

    //     setHide(false);
    // };

    return ( 
        <AddPanel>
            <div className="blur" >
                <div className="author-container" >
                    <form>
                        <h2>Add New Author's Information</h2>

                        <div className="form-group" >
                            <label>Author</label>
                            <input type="text" id="text" name="text" placeholder="Enter name of author" required />
                        </div>

                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input type="date" id="date" name="date" required />
                        </div>

                        <div className="form-group">
                            <label>Description</label>
                            <textarea id="description" name="description" placeholder="Enter a description of the author" required />
                        </div>

                        <div className="grBtn" >
                            <button type="submit">Add</button>
                            <button type="button" onClick={() => {setHide(false)}}>Cancel</button>
                        </div>
                    </form> 
                </div> 
            </div> 
        </AddPanel>
    );
};

export default Add;

const AddPanel = styled.div `
    background-color: #f2f2f2;
    font-family: 'Arial', sans-serif;

    .blur {
        position: absolute;
        backdrop-filter: blur(10);
        background: rgba(0, 0, 0, 0.7);
        width: 86%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .author-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        form {
            background: linear-gradient(123deg, rgba(11,11,121,1) 33%, rgba(117,14,95,1) 67%, rgba(217,13,34,1) 100%);
            border-radius: 1%;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            padding: 40px;
            width: 800px;
            display: flex;
            flex-direction: column;

            h2 {
                font-size: 24px;
                margin-bottom: 30px;
                text-align:  center;
                background: -webkit-linear-gradient(white, gray);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .form-group {
                margin-bottom: 20px;

                label {
                    color: #ffffffcc;
                    display: block;
                    font-size: 16px;
                    font-weight: bold;
                    margin-bottom: 5px;
                }

                input[type="text"], input[type="date"], textarea {
                    background-color: #f6f6f6;
                    border: none;
                    border-radius: 5px;
                    box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 0.1);
                    color: #777;
                    display: block;
                    font-size: 12px;
                    padding: 10px 15px;
                    width: 100%;
                    font-family: 'Arial', sans-serif;

                    &:focus {
                        outline: none;
                    }
                }
            }

            .grBtn {
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 300px;

                button {
                    background: linear-gradient(123deg, rgba(14,14,217,1) 33%, rgba(149,60,130,1) 67%, rgba(29,179,51,1) 100%);
                    border-radius: 5%;
                    border: none;
                    width: 100px;
                    color: #ffffffcc;
                    cursor: pointer;
                    display: block;
                    align-items: center;
                    font-size: 14px;
                    padding: 10px 20px;
                    transition: background-color ease-in-out 0.2s;
                    
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
`; 
