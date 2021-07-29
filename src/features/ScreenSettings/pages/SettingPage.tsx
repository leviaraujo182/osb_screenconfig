import React from 'react'
import { PageContainer } from 'components/PageContainer'
import { ProcessPageLayout } from 'components/ProcessPageLayout'
import { ProcessDescriptionHeader } from 'components/ProcessDescriptionHeader'


export const SettingPage = () => {
    return (
        <PageContainer>
            <ProcessPageLayout 
                header={
                    <ProcessDescriptionHeader title="Configurações" />
                }
                main={"main"}
                footer={"footer"}
            />
        </PageContainer>
    )
}