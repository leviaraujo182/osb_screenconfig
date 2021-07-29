import React from 'react'
import { PageContainer } from 'components/PageContainer'
import { ProcessPageLayout } from 'components/ProcessPageLayout'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'
import { HeaderAccounts } from 'components/HeaderAccounts'
import { Box } from '@material-ui/core'
import { ButtonWithFloatingIcon } from 'components/ButtonWithFloatingIcon'
import { styles } from './SettingPage.style'

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
                    <Box style={{ paddingBottom: 20 }}>
                        <ProcessDescriptionHeader title="Configurações" />
                        <HeaderAccounts title="Luiz Ananda Macêdo" subtitle="Conta 12345-0" icon={Iconfem} iconRight={IconCheck}/>
                        <HeaderAccounts title="Pedro Victor da Silva" subtitle="Conta 12345-0" icon={Iconmasc} iconRight={IconFix}/>
                        <Box style={{ display: 'flex', justifyContent: 'center', }}>
                            <Box className={useStyles.boxbtn}>
                                <ButtonWithFloatingIcon size="medium">Ver todas</ButtonWithFloatingIcon>
                            </Box>
                        </Box>
                    </Box>
                }
                main={"main"}
                footer={"footer"}
            />
        </PageContainer>
    )
}