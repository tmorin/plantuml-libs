# ServiceDefenderRobotController


```text
azure-17/Item/Other/ServiceDefenderRobotController
```

```text
include('azure-17/Item/Other/ServiceDefenderRobotController')
```



| Illustration | ServiceDefenderRobotController | ServiceDefenderRobotControllerCard | ServiceDefenderRobotControllerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Other/ServiceDefenderRobotController.png) | ![illustration for ServiceDefenderRobotController](../../../azure-17/Item/Other/ServiceDefenderRobotController.Local.png) | ![illustration for ServiceDefenderRobotControllerCard](../../../azure-17/Item/Other/ServiceDefenderRobotControllerCard.Local.png) | ![illustration for ServiceDefenderRobotControllerGroup](../../../azure-17/Item/Other/ServiceDefenderRobotControllerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDefenderRobotControllerXs>`
- `<$ServiceDefenderRobotControllerSm>`
- `<$ServiceDefenderRobotControllerMd>`
- `<$ServiceDefenderRobotControllerLg>`





## ServiceDefenderRobotController

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDefenderRobotController
include('azure-17/Item/Other/ServiceDefenderRobotController')

' renders the element
ServiceDefenderRobotController('ServiceDefenderRobotController', 'Service Defender Robot Controller', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceDefenderRobotController
include('azure-17/Item/Other/ServiceDefenderRobotController')

' renders the element
ServiceDefenderRobotController('ServiceDefenderRobotController', 'Service Defender Robot Controller', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDefenderRobotControllerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDefenderRobotControllerCard
include('azure-17/Item/Other/ServiceDefenderRobotController')

' renders the element
ServiceDefenderRobotControllerCard('ServiceDefenderRobotControllerCard', 'Service Defender Robot Controller Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDefenderRobotControllerCard
include('azure-17/Item/Other/ServiceDefenderRobotController')

' renders the element
ServiceDefenderRobotControllerCard('ServiceDefenderRobotControllerCard', 'Service Defender Robot Controller Card', 'an optional description')
@enduml
```

## ServiceDefenderRobotControllerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDefenderRobotControllerGroup
include('azure-17/Item/Other/ServiceDefenderRobotController')

' renders the element
ServiceDefenderRobotControllerGroup('ServiceDefenderRobotControllerGroup', 'Service Defender Robot Controller Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDefenderRobotControllerGroup
include('azure-17/Item/Other/ServiceDefenderRobotController')

' renders the element
ServiceDefenderRobotControllerGroup('ServiceDefenderRobotControllerGroup', 'Service Defender Robot Controller Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

