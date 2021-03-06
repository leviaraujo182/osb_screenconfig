import React from 'react'
import { PageContainer } from 'components/PageContainer'
import { ProcessPageLayout } from 'components/ProcessPageLayout'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'
import { HeaderAccounts } from 'components/HeaderAccounts'
import { Box, Divider } from '@material-ui/core'
import { ButtonWithFloatingIcon } from 'components/ButtonWithFloatingIcon'
import { styles } from './SettingPage.style'
import { ListOptions } from 'features/ScreenSettings/components/ListOptions'
import { FooterButtons } from 'components/FooterButtons'

import Iconfem from '_assets/imgs/personafem.svg'
import Iconmasc from '_assets/imgs/personamasc.svg'
import IconCheck from '_assets/imgs/iconCheck.svg'
import IconFix from '_assets/imgs/iconFix.svg'



export const SettingPage = () => {
    const useStyles = styles()
    return (
        <PageContainer>
            <ProcessPageLayout 
                header={
                    <Box className={useStyles.boxmain}>
                        <ProcessDescriptionHeader title="Configurações" />
                        <HeaderAccounts title="Luiza Ananda Macêdo" subtitle="Conta 12345-0" bank="Banquinho" icon={Iconfem} iconRight={IconCheck}/>
                        <Divider variant="fullWidth" className={useStyles.divider}/>
                        <HeaderAccounts title="Pedro Victor da Silva" subtitle="Conta 12344-0" bank="Bancão" icon={Iconmasc} iconRight={IconFix}/>
                        <Box className={useStyles.containerbtn}>
                            <Box className={useStyles.boxbtn}>
                                <ButtonWithFloatingIcon size="medium">Ver todas</ButtonWithFloatingIcon>
                            </Box>
                        </Box>
                    </Box>
                }
                main={
                    <Box className={useStyles.boxoptions} >  
                        <ListOptions />
                    </Box>
                }
                footer={
                <Box >
                    <FooterButtons />    
                </Box> }
            />
        </PageContainer>
    )
}