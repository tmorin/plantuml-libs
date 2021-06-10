# ServiceLabServices


```text
azure-4/Item/DevOps/ServiceLabServices
```

```text
include('azure-4/Item/DevOps/ServiceLabServices')
```



| Illustration | ServiceLabServices | ServiceLabServicesCard | ServiceLabServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/DevOps/ServiceLabServices.png) | ![illustration for ServiceLabServices](../../../azure-4/Item/DevOps/ServiceLabServices.Local.png) | ![illustration for ServiceLabServicesCard](../../../azure-4/Item/DevOps/ServiceLabServicesCard.Local.png) | ![illustration for ServiceLabServicesGroup](../../../azure-4/Item/DevOps/ServiceLabServicesGroup.Local.png) |




## ServiceLabServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceLabServices
include('azure-4/Item/DevOps/ServiceLabServices')

' renders the element
ServiceLabServices('ServiceLabServices', 'Service Lab Services', 'an optional tech label')
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

' loads the Item which embeds the element ServiceLabServices
include('azure-4/Item/DevOps/ServiceLabServices')

' renders the element
ServiceLabServices('ServiceLabServices', 'Service Lab Services', 'an optional tech label')
@enduml
```

## ServiceLabServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceLabServicesCard
include('azure-4/Item/DevOps/ServiceLabServices')

' renders the element
ServiceLabServicesCard('ServiceLabServicesCard', 'Service Lab Services Card', 'an optional description')
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

' loads the Item which embeds the element ServiceLabServicesCard
include('azure-4/Item/DevOps/ServiceLabServices')

' renders the element
ServiceLabServicesCard('ServiceLabServicesCard', 'Service Lab Services Card', 'an optional description')
@enduml
```

## ServiceLabServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceLabServicesGroup
include('azure-4/Item/DevOps/ServiceLabServices')

' renders the element
ServiceLabServicesGroup('ServiceLabServicesGroup', 'Service Lab Services Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceLabServicesGroup
include('azure-4/Item/DevOps/ServiceLabServices')

' renders the element
ServiceLabServicesGroup('ServiceLabServicesGroup', 'Service Lab Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

