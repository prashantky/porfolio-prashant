import React, { useEffect, useState } from 'react'
import imageOverlay from './../../Assets/about.png'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import Validation from './../../utility/Validation'
import { InlineNotification } from 'carbon-components-react'
import { createUseStyles,useTheme } from 'react-jss'
import { propTypes } from 'react-bootstrap/esm/Image'
const Contact = () => {
  const [formValidity, setFormValidity] = useState(false)
  const [notify, setNotify] = useState(false);
  const [loading,setLoading]=useState({
    loading:false,
    description:'desc',
    status:'warning',
    hidden:true,
    title:'info'
  })
const [validForm,setValidForm] =useState("")
  const [form, setFormData] = useState({
    name: {
      value: '',

      validation: {
        required: true,
        minLength: 4,
        name: true
      },
      messages: null,
      valid: false,
      touched: false
    },
    email: {
      value: '',
      validation: {
        required: true,
        email: true
      },
      messages: null,
      valid: false,
      touched: false
    },
    message: {
      value: '',
      validation: {
        required: true,
        minLength: 50,
        maxLength: 250
      },
      messages: null,
      valid: false,
      touched: false
    }
  })
  const useStyles=createUseStyles({
    bottomSpacer:{
      marginBottom:'2rem',
      color:'#0066cc',
    }
  })
  const handleChange = (event) => {
    let identifier = event.target.id
    let element = { ...form[identifier] }
    element.value = event.target.value
    element.touched = true
    const { isValid, messages } = Validation(
      event.target.value,
      form[identifier].validation
    )
    element.valid = isValid
    element.messages = messages
    setFormData({ ...form, [identifier]: element })
    setFormValidity(handleValidation())
  }
  const handleValidation = () => {
    console.log('hello all ouput name', form.name.valid)
    console.log('hello all ouput email', form.email.valid)
    console.log('hello all ouput message', form.message.valid)

    return form.name.valid & form.email.valid & form.message.valid
  }
  const handleSubmit = () => {
    console.log('look at that', formValidity)
    if (formValidity) {
      console.log('loot at that 3')

      let contact = {
        email: form.email.value,
        name: form.name.value,
        message: form.message.value
      }
      alert("Your details",contact)
      setNotify(true)
    }
  }
  useEffect(()=>{

  },[])
  const theme=useTheme();
  const classes=useStyles({theme})
  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: 'url(' + imageOverlay + ')' }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">Send A Message</h5>
                    </div>
                    <div>
                      {/* <form className="contactForm"> */}
                      <div className="contactForm">
                      {notify && <div  className={classes.bottomSpacer} style={{color:"-moz-initial",width:'100%'}}>
                        <InlineNotification kind="success"  title=" Mesage send suceessfully" className='inline-notification-btn' onCloseButtonClick={()=>{
                          setNotify(false)
                          setLoading({
                           loading:false,
                           description:'desc',
                           status:'info',
                           hidden:true,
                           title:"Info" 
                          })
                        }}/>
                        </div>}
                        {/* <div id="errormessage"> Invalid form</div> */}
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                name="name"
                                value={form.name.value}
                                className="form-control"
                                id="name"
                                placeholder="Your Name"
                                data-msg="Please enter at least 4 chars"
                                // onChange={(e) => {
                                //   setFormData({ ...form, name: e.target.value })
                                // }}
                                onChange={handleChange}
                              />

                              <div className="validation">
                                {form.name.messages}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                value={form.email.value}
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                data-rule="email"
                                data-msg="Please enter a valid email"
                                onChange={handleChange}
                              />
                              <div className="validation">
                                {form.email.messages}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                id="message"
                                value={form.message.value}
                                name="message"
                                rows="5"
                                data-rule="required"
                                data-msg="Please write something for us"
                                placeholder="Message"
                                onChange={handleChange}
                              ></textarea>
                              <div className="validation">
                                {form.message.messages}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className='col-md-3 px-2 py-2'>{validForm}</div>
                            <button
                              className="button button-a button-big button-rouded"
                              onClick={handleSubmit}
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* </form> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Whether you want to get in touch, talk about a project
                        collaboration, or just say hi, I'd love to hear from
                        you.
                        <br />
                        Simply fill the from and send me an email.
                      </p>
                      {/* <!-- <ul class="list-ico">
                                <li><span class="ion-ios-location"></span> 329 WASHINGTON ST BOSTON, MA 02108</li>
                                <li><span class="ion-ios-telephone"></span> (617) 557-0089</li>
                                <li><span class="ion-email"></span> contact@example.com</li>
                                </ul> --> */}
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://github.com/prashantky"
                            style={{ color: 'black' }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <AiFillGithub />
                            </span>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://github.com/prashantky"
                            style={{ color: 'black' }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <AiOutlineTwitter />{' '}
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com/prashantky"
                            style={{ color: 'black' }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ico-circle">
                              <AiFillInstagram />{' '}
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="copyright-box"></div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
