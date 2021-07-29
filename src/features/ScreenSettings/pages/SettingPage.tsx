import React from 'react'
import { PageContainer } from 'components/PageContainer'
import { ProcessPageLayout } from 'components/ProcessPageLayout'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'
import { HeaderAccounts } from 'components/HeaderAccounts'
import { Box } from '@material-ui/core'
import Iconfem from '_assets/imgs/personafem.svg'
import Iconmasc from '_assets/imgs/personamasc.svg'


export const SettingPage = () => {
    return (
        <PageContainer>
            <ProcessPageLayout 
                header={
                    <Box>
                        <ProcessDescriptionHeader title="Configurações" />
                        <HeaderAccounts title="Luiz Ananda Macêdo" subtitle="Conta 12345-0" icon={Iconfem}/>
                        <HeaderAccounts title="Pedro Victor da Silva" subtitle="Conta 12345-0" icon={Iconmasc}/>
                    </Box>
                }
                main={"main"}
                footer={"footer"}
            />
        </PageContainer>
    )
}