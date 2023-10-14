# ServiceMedTechService


```text
azure-17/Item/Other/ServiceMedTechService
```

```text
include('azure-17/Item/Other/ServiceMedTechService')
```



| Illustration | ServiceMedTechService | ServiceMedTechServiceCard | ServiceMedTechServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Other/ServiceMedTechService.png) | ![illustration for ServiceMedTechService](../../../azure-17/Item/Other/ServiceMedTechService.Local.png) | ![illustration for ServiceMedTechServiceCard](../../../azure-17/Item/Other/ServiceMedTechServiceCard.Local.png) | ![illustration for ServiceMedTechServiceGroup](../../../azure-17/Item/Other/ServiceMedTechServiceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMedTechServiceXs>`
- `<$ServiceMedTechServiceSm>`
- `<$ServiceMedTechServiceMd>`
- `<$ServiceMedTechServiceLg>`





## ServiceMedTechService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceMedTechService
include('azure-17/Item/Other/ServiceMedTechService')

' renders the element
ServiceMedTechService('ServiceMedTechService', 'Service Med Tech Service', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceMedTechService
include('azure-17/Item/Other/ServiceMedTechService')

' renders the element
ServiceMedTechService('ServiceMedTechService', 'Service Med Tech Service', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMedTechServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceMedTechServiceCard
include('azure-17/Item/Other/ServiceMedTechService')

' renders the element
ServiceMedTechServiceCard('ServiceMedTechServiceCard', 'Service Med Tech Service Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMedTechServiceCard
include('azure-17/Item/Other/ServiceMedTechService')

' renders the element
ServiceMedTechServiceCard('ServiceMedTechServiceCard', 'Service Med Tech Service Card', 'an optional description')
@enduml
```

## ServiceMedTechServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceMedTechServiceGroup
include('azure-17/Item/Other/ServiceMedTechService')

' renders the element
ServiceMedTechServiceGroup('ServiceMedTechServiceGroup', 'Service Med Tech Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMedTechServiceGroup
include('azure-17/Item/Other/ServiceMedTechService')

' renders the element
ServiceMedTechServiceGroup('ServiceMedTechServiceGroup', 'Service Med Tech Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

