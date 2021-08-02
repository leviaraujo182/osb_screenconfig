import React from 'react'
import { PageContainer } from 'components/PageContainer'
import { ProcessPageLayout } from 'components/ProcessPageLayout'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'
import { HeaderAccounts } from 'components/HeaderAccounts'
import { Box, Divider } from '@material-ui/core'
import { ButtonWithFloatingIcon } from 'components/ButtonWithFloatingIcon'
import { styles } from './SettingPage.style'
import { ListOptions } from 'features/ScreenSettings/components/ListOptions'
import { Button } from 'components/Button'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons'

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
                        <HeaderAccounts title="Luiz Ananda Macêdo" subtitle="Conta 12345-0" bank="Banquinho" icon={Iconfem} iconRight={IconCheck}/>
                        <Divider variant="fullWidth"/>
                        <HeaderAccounts title="Pedro Victor da Silva" subtitle="Conta 12345-0" bank="Bancão" icon={Iconmasc} iconRight={IconFix}/>
                        <Box style={{ display: 'flex', justifyContent: 'center', }}>
                            <Box className={useStyles.boxbtn}>
                                <ButtonWithFloatingIcon size="medium">Ver todas</ButtonWithFloatingIcon>
                            </Box>
                        </Box>
                    </Box>
                }
                main={
                    <Box style={{ marginTop: 20 }} >  
                        <ListOptions />
                    </Box>
                }
                footer={
                <Box > 
                    <Button palette="secondary" onClick={()=> console.log("Voltar")} startIcon={ <KeyboardArrowLeft color="primary" radius={20}/>} > Voltar </Button>
                </Box> }
            />
        </PageContainer>
    )
}