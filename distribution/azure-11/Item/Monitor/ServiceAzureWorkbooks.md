# ServiceAzureWorkbooks


```text
azure-11/Item/Monitor/ServiceAzureWorkbooks
```

```text
include('azure-11/Item/Monitor/ServiceAzureWorkbooks')
```



| Illustration | ServiceAzureWorkbooks | ServiceAzureWorkbooksCard | ServiceAzureWorkbooksGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Monitor/ServiceAzureWorkbooks.png) | ![illustration for ServiceAzureWorkbooks](../../../azure-11/Item/Monitor/ServiceAzureWorkbooks.Local.png) | ![illustration for ServiceAzureWorkbooksCard](../../../azure-11/Item/Monitor/ServiceAzureWorkbooksCard.Local.png) | ![illustration for ServiceAzureWorkbooksGroup](../../../azure-11/Item/Monitor/ServiceAzureWorkbooksGroup.Local.png) |




## ServiceAzureWorkbooks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureWorkbooks
include('azure-11/Item/Monitor/ServiceAzureWorkbooks')

' renders the element
ServiceAzureWorkbooks('ServiceAzureWorkbooks', 'Service Azure Workbooks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureWorkbooks
include('azure-11/Item/Monitor/ServiceAzureWorkbooks')

' renders the element
ServiceAzureWorkbooks('ServiceAzureWorkbooks', 'Service Azure Workbooks', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureWorkbooksCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureWorkbooksCard
include('azure-11/Item/Monitor/ServiceAzureWorkbooks')

' renders the element
ServiceAzureWorkbooksCard('ServiceAzureWorkbooksCard', 'Service Azure Workbooks Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureWorkbooksCard
include('azure-11/Item/Monitor/ServiceAzureWorkbooks')

' renders the element
ServiceAzureWorkbooksCard('ServiceAzureWorkbooksCard', 'Service Azure Workbooks Card', 'an optional description')
@enduml
```

## ServiceAzureWorkbooksGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureWorkbooksGroup
include('azure-11/Item/Monitor/ServiceAzureWorkbooks')

' renders the element
ServiceAzureWorkbooksGroup('ServiceAzureWorkbooksGroup', 'Service Azure Workbooks Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureWorkbooksGroup
include('azure-11/Item/Monitor/ServiceAzureWorkbooks')

' renders the element
ServiceAzureWorkbooksGroup('ServiceAzureWorkbooksGroup', 'Service Azure Workbooks Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

