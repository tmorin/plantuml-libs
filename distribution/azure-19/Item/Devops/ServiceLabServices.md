# ServiceLabServices


```text
azure-19/Item/Devops/ServiceLabServices
```

```text
include('azure-19/Item/Devops/ServiceLabServices')
```



| Illustration | ServiceLabServices | ServiceLabServicesCard | ServiceLabServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Devops/ServiceLabServices.png) | ![illustration for ServiceLabServices](../../../azure-19/Item/Devops/ServiceLabServices.Local.png) | ![illustration for ServiceLabServicesCard](../../../azure-19/Item/Devops/ServiceLabServicesCard.Local.png) | ![illustration for ServiceLabServicesGroup](../../../azure-19/Item/Devops/ServiceLabServicesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceLabServicesXs>`
- `<$ServiceLabServicesSm>`
- `<$ServiceLabServicesMd>`
- `<$ServiceLabServicesLg>`





## ServiceLabServices

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLabServices
include('azure-19/Item/Devops/ServiceLabServices')

' renders the element
ServiceLabServices('ServiceLabServices', 'Service Lab Services', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLabServices
include('azure-19/Item/Devops/ServiceLabServices')

' renders the element
ServiceLabServices('ServiceLabServices', 'Service Lab Services', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceLabServicesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLabServicesCard
include('azure-19/Item/Devops/ServiceLabServices')

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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLabServicesCard
include('azure-19/Item/Devops/ServiceLabServices')

' renders the element
ServiceLabServicesCard('ServiceLabServicesCard', 'Service Lab Services Card', 'an optional description')
@enduml
```

## ServiceLabServicesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLabServicesGroup
include('azure-19/Item/Devops/ServiceLabServices')

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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceLabServicesGroup
include('azure-19/Item/Devops/ServiceLabServices')

' renders the element
ServiceLabServicesGroup('ServiceLabServicesGroup', 'Service Lab Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

