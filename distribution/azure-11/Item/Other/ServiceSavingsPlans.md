# ServiceSavingsPlans


```text
azure-11/Item/Other/ServiceSavingsPlans
```

```text
include('azure-11/Item/Other/ServiceSavingsPlans')
```



| Illustration | ServiceSavingsPlans | ServiceSavingsPlansCard | ServiceSavingsPlansGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Other/ServiceSavingsPlans.png) | ![illustration for ServiceSavingsPlans](../../../azure-11/Item/Other/ServiceSavingsPlans.Local.png) | ![illustration for ServiceSavingsPlansCard](../../../azure-11/Item/Other/ServiceSavingsPlansCard.Local.png) | ![illustration for ServiceSavingsPlansGroup](../../../azure-11/Item/Other/ServiceSavingsPlansGroup.Local.png) |




## ServiceSavingsPlans

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlans
include('azure-11/Item/Other/ServiceSavingsPlans')

' renders the element
ServiceSavingsPlans('ServiceSavingsPlans', 'Service Savings Plans', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlans
include('azure-11/Item/Other/ServiceSavingsPlans')

' renders the element
ServiceSavingsPlans('ServiceSavingsPlans', 'Service Savings Plans', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSavingsPlansCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlansCard
include('azure-11/Item/Other/ServiceSavingsPlans')

' renders the element
ServiceSavingsPlansCard('ServiceSavingsPlansCard', 'Service Savings Plans Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlansCard
include('azure-11/Item/Other/ServiceSavingsPlans')

' renders the element
ServiceSavingsPlansCard('ServiceSavingsPlansCard', 'Service Savings Plans Card', 'an optional description')
@enduml
```

## ServiceSavingsPlansGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlansGroup
include('azure-11/Item/Other/ServiceSavingsPlans')

' renders the element
ServiceSavingsPlansGroup('ServiceSavingsPlansGroup', 'Service Savings Plans Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceSavingsPlansGroup
include('azure-11/Item/Other/ServiceSavingsPlans')

' renders the element
ServiceSavingsPlansGroup('ServiceSavingsPlansGroup', 'Service Savings Plans Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

