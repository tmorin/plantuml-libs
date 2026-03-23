# ServiceLabServices


```text
azure/Item/Devops/ServiceLabServices
```

```text
include('azure/Item/Devops/ServiceLabServices')
```



| Illustration | ServiceLabServices | ServiceLabServicesCard | ServiceLabServicesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Devops/ServiceLabServices.png) | ![illustration for ServiceLabServices](../../../azure/Item/Devops/ServiceLabServices.Local.png) | ![illustration for ServiceLabServicesCard](../../../azure/Item/Devops/ServiceLabServicesCard.Local.png) | ![illustration for ServiceLabServicesGroup](../../../azure/Item/Devops/ServiceLabServicesGroup.Local.png) |



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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLabServices
include('azure/Item/Devops/ServiceLabServices')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLabServices
include('azure/Item/Devops/ServiceLabServices')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLabServicesCard
include('azure/Item/Devops/ServiceLabServices')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLabServicesCard
include('azure/Item/Devops/ServiceLabServices')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLabServicesGroup
include('azure/Item/Devops/ServiceLabServices')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceLabServicesGroup
include('azure/Item/Devops/ServiceLabServices')

' renders the element
ServiceLabServicesGroup('ServiceLabServicesGroup', 'Service Lab Services Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

