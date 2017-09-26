import React, {Component} from 'react'

export default class ForgotPasswordForm extends Component{
    render(){
        return(
            <div className='forgotPassword'>
                <h3>重置密码</h3>
                <form className='forgotPassword' onSubmit={this.resetPassword.bind(this)}>{/*登录*/}
                    <div className='row'>
                        <label>邮箱</label>
                        <input type='text' value={this.state.formData.email}
                               onChange={this.changeFormData.bind(this,'email')}/>
                    </div>
                    <div className='row actions'>
                        <button type='submit'>发送重置邮件</button>
                        <a href='#' onClick={this.returnToSignIn.bind(this)}>返回登录</a>
                    </div>
                </form>
            </div>
        )
    }
}