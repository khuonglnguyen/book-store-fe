import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import imageDelete from "./assets/binRemovebg.png";

function Delete({ setHide }) {
    const popupRef = useRef(null);
    const itemRandom = Math.floor(Math.random() * 100);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setHide();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, [popupRef, setHide]);
  
    const handleDelete = () => {
        console.log(itemRandom);
    }

    return (
        <DeletePanel>
            <div className="blur">
                <div class="popup" ref={popupRef}>
                    <div className="image"><img src={imageDelete} alt='' /></div>

                    <p>Do you really want to delete this {itemRandom}?</p>

                    <div class="grBtn">
                        <button type="button" class="btn btnDelete" onClick={handleDelete}>Delete</button>
                        <button type="button" class="btn btnCancel" onClick={() => {setHide()}}>Cancel</button>
                    </div>
                </div>
            </div>
        </DeletePanel>
    );
}

export default Delete;

const DeletePanel = styled.div`
	font-family: 'Varela Round', sans-serif;
    margin: 0;
    padding: 0;

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

    .popup {
        width: 400px;
        background: #f1f1f1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;

        .image {
            border: 1px solid red;
            border-radius: 50%;
            margin: 10px;
            text-align: center;
            align-items: center;
            justify-content: center;
            user-select: none;
            overflow: hidden;

            img {
                width: 80px;
                height: 80px;
                padding: 10px;
            }
        }

        p {
            padding: 5px;
            color: #999;
        }

        .grBtn {
            padding: 5px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 20px;

            .btnCancel {
                background: #C0C0C0;
                border-radius: 3px;

                &:hover {
                    background: #a8a8a8;
                }
            }

            .btnDelete {
                background: #f15e5e;
                border-radius: 3px;
            }

            .btnDelete:hover{
                background: #ee3535;
            }
        }
    }		
`;