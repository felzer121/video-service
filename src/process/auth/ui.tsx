import React from 'react'
import {   
    Box,
    Button,
    FormControl,
    FormHelperText,
    InputLabel,
    Tooltip,
    Typography 
} from "@mui/material"
import HowToRegIcon from '@mui/icons-material/HowToReg'
import { validate } from '../../shared/validate'
import { DarkFilled } from '../../shared/darkFilled'
import './styles.scss'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../shared/store/user/userSlice'
import { NavLink } from 'react-router-dom'
import Happy from './fon.svg?component'
import { login } from '../../shared/api/user'
import { MainButton } from '../../shared/component/MainButton'

interface authField {
    email: string
    password: string
}
  
interface validAuthField {
    [key: string]: {
      isValid: null | boolean
      error?: string
    }
}

export const Auth = () => {

    const [authField, setAuthField] = React.useState<authField>({ email: '', password: '' })
    const [validateField, setValidateField] = React.useState<validAuthField>({
      email: { isValid: null },
      password: { isValid: null }
    })
    const dispatch = useDispatch()
    const [error, setError] = React.useState('')

    const handleValidField = (type: 'email' | 'password', value: string) => {
        const valid = validate(type, value)
        if (valid?.isValid) {
          setValidateField({ ...validateField, [type]: { isValid: valid.isValid } })
        } else {
          setValidateField({ ...validateField, [type]: { isValid: valid.isValid, error: valid?.error } })
        }
    }
    
    const authentication = async () => {
        try {
            await login(authField.email, authField.password)
            dispatch(setAuth(true))
        } catch(message) {
            const error = message as string
            setValidateField({ ...validateField, email: { isValid: false, error: error } })
        }
    }


    return (
        <div className='auth'>
            <div className='auth__login'>
                <div className='auth__loginContainer'>
                    <div>
                        <a href='/' className='SideBar__logoLink'>
                            <svg
                                width='23'
                                height='20'
                                viewBox='0 0 23 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M8.90425 0.937311C9.43383 0.41043 10.2904 0.413132 10.8172 0.940013C11.3441 1.46689 11.3441 2.32341 10.8172 2.85029L5.41333 8.2542C5.14854 8.51629 4.80269 8.64869 4.45684 8.64869C4.11099 8.64869 3.76514 8.51629 3.50305 8.2515L0.801094 5.54955C0.274213 5.02266 0.274213 4.16615 0.801094 3.63926C1.32797 3.11238 2.18449 3.11238 2.71137 3.63926L4.45684 5.38743L8.90425 0.937311ZM8.90425 11.7451C9.43383 11.2182 10.2904 11.2209 10.8172 11.7478C11.3441 12.2747 11.3441 13.1312 10.8172 13.6581L5.41333 19.062C5.14854 19.3241 4.80269 19.4565 4.45684 19.4565C4.11099 19.4565 3.76514 19.3241 3.50305 19.062L0.801094 16.3601C0.274213 15.8332 0.274213 14.9767 0.801094 14.4498C1.32797 13.9229 2.18449 13.9229 2.71137 14.4498L4.45684 16.1952L8.90425 11.7451ZM20.6686 3.24478H15.2646C14.5189 3.24478 13.9137 3.85002 13.9137 4.59576C13.9137 5.34149 14.5189 5.94673 15.2646 5.94673H20.6686C21.4143 5.94673 22.0195 5.34149 22.0195 4.59576C22.0195 3.85002 21.4143 3.24478 20.6686 3.24478ZM15.2646 14.0526H20.6686C21.4143 14.0526 22.0195 14.6578 22.0195 15.4036C22.0195 16.1493 21.4143 16.7545 20.6686 16.7545H15.2646C14.5189 16.7545 13.9137 16.1493 13.9137 15.4036C13.9137 14.6578 14.5189 14.0526 15.2646 14.0526Z'
                                fill='#FFC200'
                                />
                            </svg>
                            <span className='SideBar__logoHeader'>PROJECTUS</span>
                        </a>
                    </div>
                    <div className='auth__loginContent'>
                        <div className='auth__loginTitle'>
                            <Typography variant='h4' component='h4'>
                                Авторизация
                            </Typography>
                            <Typography variant='subtitle1' sx={{ display: 'flex' }} component='p'>
                                <HowToRegIcon sx={{ marginRight: '7px' 
                            }} />
                                Введите email и получите код авторизации
                            </Typography>
                        </div>
                        <div className='auth__loginForm'>
                            <Box mt={2} mb={2}>
                                <FormControl
                                sx={{ width: '100%' }}
                                variant='filled'
                                error={
                                    !validateField.email.isValid && validateField.email.isValid !== null
                                    ? true
                                    : false
                                }>
                                <InputLabel
                                    htmlFor='email'
                                    color='primary'
                                    sx={{ color: '#6D6D6D', fontFamily: 'Inter' }}>
                                    Email
                                </InputLabel>
                                <DarkFilled
                                    autoComplete='off'
                                    value={authField.email}
                                    onChange={event => setAuthField({ ...authField, email: event.target.value })}
                                    required
                                    id='email'
                                    onBlur={event => handleValidField('email', event.target.value)}
                                />
                                {validateField?.email?.error && (
                                    <FormHelperText id='password'>{validateField.email.error}</FormHelperText>
                                )}
                                </FormControl>
                            </Box>
                            <Box mt={2} mb={2}>
                                <FormControl
                                sx={{ width: '100%' }}
                                error={
                                    !validateField.password.isValid && validateField.password.isValid !== null
                                    ? true
                                    : false
                                }
                                variant='filled'>
                                <InputLabel
                                    htmlFor='password'
                                    color='primary'
                                    sx={{ color: '#6D6D6D', fontFamily: 'Inter' }}>
                                    Password
                                </InputLabel>
                                <DarkFilled
                                    autoComplete='off'
                                    type='password'
                                    value={authField.password}
                                    onChange={event => setAuthField({ ...authField, password: event.target.value })}
                                    required
                                    id='password'
                                    onBlur={event => handleValidField('password', event.target.value)}
                                />
                                {validateField?.password?.error && (
                                    <FormHelperText id='password'>{validateField.password.error}</FormHelperText>
                                )}
                                </FormControl>
                            </Box>
                        </div>
                        <div className='auth__loginControl'>
                            <Tooltip disableHoverListener={validateField.email.isValid && validateField.password.isValid ? true : false} title="fill the form">
                                <span>
                                    <MainButton disabled={authField.email && authField.password ? false : true} 
                                            variant='contained' onClick={authentication} className='auth__loginButton'>
                                        Войти
                                    </MainButton>
                                </span>
                            </Tooltip>
                        </div>
                    </div>
                    <div className='auth__noAccount'>
                        <div className='auth__noAccount-titleBlock'>
                            <div className='auth__noAccount-line' style={{maxWidth: 24}} />
                            <span className='auth__noAccount-title'>или</span>
                            <div className='auth__noAccount-line' />
                        </div>
                        <div className='auth__noAccount-info'>
                            <p className='auth__noAccount-txt'>Не имеете учетной записи?
                                <NavLink to="registration" className='auth__noAccount-link'> Регистрация</NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='auth__background'>
                <Happy />
            </div>
        </div>
    )
}