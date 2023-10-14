# ServiceCostManagementAndBilling


```text
azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling
```

```text
include('azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling')
```



| Illustration | ServiceCostManagementAndBilling | ServiceCostManagementAndBillingCard | ServiceCostManagementAndBillingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling.png) | ![illustration for ServiceCostManagementAndBilling](../../../azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling.Local.png) | ![illustration for ServiceCostManagementAndBillingCard](../../../azure-17/Item/ManagementGovernance/ServiceCostManagementAndBillingCard.Local.png) | ![illustration for ServiceCostManagementAndBillingGroup](../../../azure-17/Item/ManagementGovernance/ServiceCostManagementAndBillingGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceCostManagementAndBillingXs>`
- `<$ServiceCostManagementAndBillingSm>`
- `<$ServiceCostManagementAndBillingMd>`
- `<$ServiceCostManagementAndBillingLg>`





## ServiceCostManagementAndBilling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceCostManagementAndBilling
include('azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling')

' renders the element
ServiceCostManagementAndBilling('ServiceCostManagementAndBilling', 'Service Cost Management And Billing', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceCostManagementAndBilling
include('azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling')

' renders the element
ServiceCostManagementAndBilling('ServiceCostManagementAndBilling', 'Service Cost Management And Billing', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceCostManagementAndBillingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceCostManagementAndBillingCard
include('azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling')

' renders the element
ServiceCostManagementAndBillingCard('ServiceCostManagementAndBillingCard', 'Service Cost Management And Billing Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceCostManagementAndBillingCard
include('azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling')

' renders the element
ServiceCostManagementAndBillingCard('ServiceCostManagementAndBillingCard', 'Service Cost Management And Billing Card', 'an optional description')
@enduml
```

## ServiceCostManagementAndBillingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceCostManagementAndBillingGroup
include('azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling')

' renders the element
ServiceCostManagementAndBillingGroup('ServiceCostManagementAndBillingGroup', 'Service Cost Management And Billing Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceCostManagementAndBillingGroup
include('azure-17/Item/ManagementGovernance/ServiceCostManagementAndBilling')

' renders the element
ServiceCostManagementAndBillingGroup('ServiceCostManagementAndBillingGroup', 'Service Cost Management And Billing Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

