# ServiceAutomationAccounts


```text
azure-4/Item/ManagementGovernance/ServiceAutomationAccounts
```

```text
include('azure-4/Item/ManagementGovernance/ServiceAutomationAccounts')
```



| Illustration | ServiceAutomationAccounts | ServiceAutomationAccountsCard | ServiceAutomationAccountsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/ManagementGovernance/ServiceAutomationAccounts.png) | ![illustration for ServiceAutomationAccounts](../../../azure-4/Item/ManagementGovernance/ServiceAutomationAccounts.Local.png) | ![illustration for ServiceAutomationAccountsCard](../../../azure-4/Item/ManagementGovernance/ServiceAutomationAccountsCard.Local.png) | ![illustration for ServiceAutomationAccountsGroup](../../../azure-4/Item/ManagementGovernance/ServiceAutomationAccountsGroup.Local.png) |




## ServiceAutomationAccounts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAutomationAccounts
include('azure-4/Item/ManagementGovernance/ServiceAutomationAccounts')

' renders the element
ServiceAutomationAccounts('ServiceAutomationAccounts', 'Service Automation Accounts', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAutomationAccounts
include('azure-4/Item/ManagementGovernance/ServiceAutomationAccounts')

' renders the element
ServiceAutomationAccounts('ServiceAutomationAccounts', 'Service Automation Accounts', 'an optional tech label')
@enduml
```

## ServiceAutomationAccountsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAutomationAccountsCard
include('azure-4/Item/ManagementGovernance/ServiceAutomationAccounts')

' renders the element
ServiceAutomationAccountsCard('ServiceAutomationAccountsCard', 'Service Automation Accounts Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAutomationAccountsCard
include('azure-4/Item/ManagementGovernance/ServiceAutomationAccounts')

' renders the element
ServiceAutomationAccountsCard('ServiceAutomationAccountsCard', 'Service Automation Accounts Card', 'an optional description')
@enduml
```

## ServiceAutomationAccountsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAutomationAccountsGroup
include('azure-4/Item/ManagementGovernance/ServiceAutomationAccounts')

' renders the element
ServiceAutomationAccountsGroup('ServiceAutomationAccountsGroup', 'Service Automation Accounts Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAutomationAccountsGroup
include('azure-4/Item/ManagementGovernance/ServiceAutomationAccounts')

' renders the element
ServiceAutomationAccountsGroup('ServiceAutomationAccountsGroup', 'Service Automation Accounts Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

