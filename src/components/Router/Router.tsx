import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SettingPage } from 'features/ScreenSettings/pages'
import { ScreenSettings } from 'features/ScreenSettings/constants/routes'

export const Router : React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={ScreenSettings.settingPage} component={SettingPage} />
            </Switch>
        </BrowserRouter>
    )
}