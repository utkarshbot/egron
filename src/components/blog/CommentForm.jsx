import React from 'react';
import {dsnCN} from "../../hooks/helper";


function CommentForm({className}) {


    return (
        <div className={dsnCN('form-box', className)}>
            <h3 className="mb-30">Comments</h3>
            <form>
                <div className="input__wrap controls">
                    <div className="form-group">
                        <label>What's your name?</label>
                        <input id="form_name" type="text" name="name" placeholder="Type your name"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>What's your email address?</label>
                        <input id="form_email" type="email" name="email" placeholder="Type your Email Address"
                               required="required"/>
                    </div>

                    <div className="form-group">
                        <label>Comment?</label>
                        <textarea id="form_message" className="form-control" name="comment"
                                  placeholder="Tell us about you and the world" required="required"
                        />
                    </div>

                    <div className="image-zoom">
                        <button type="submit">Post Comment</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CommentForm;