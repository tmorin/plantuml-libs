# ServiceDevOpsStarter


```text
azure-20/Item/Devops/ServiceDevOpsStarter
```

```text
include('azure-20/Item/Devops/ServiceDevOpsStarter')
```



| Illustration | ServiceDevOpsStarter | ServiceDevOpsStarterCard | ServiceDevOpsStarterGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Devops/ServiceDevOpsStarter.png) | ![illustration for ServiceDevOpsStarter](../../../azure-20/Item/Devops/ServiceDevOpsStarter.Local.png) | ![illustration for ServiceDevOpsStarterCard](../../../azure-20/Item/Devops/ServiceDevOpsStarterCard.Local.png) | ![illustration for ServiceDevOpsStarterGroup](../../../azure-20/Item/Devops/ServiceDevOpsStarterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDevOpsStarterXs>`
- `<$ServiceDevOpsStarterSm>`
- `<$ServiceDevOpsStarterMd>`
- `<$ServiceDevOpsStarterLg>`





## ServiceDevOpsStarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceDevOpsStarter
include('azure-20/Item/Devops/ServiceDevOpsStarter')

' renders the element
ServiceDevOpsStarter('ServiceDevOpsStarter', 'Service Dev Ops Starter', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceDevOpsStarter
include('azure-20/Item/Devops/ServiceDevOpsStarter')

' renders the element
ServiceDevOpsStarter('ServiceDevOpsStarter', 'Service Dev Ops Starter', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDevOpsStarterCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceDevOpsStarterCard
include('azure-20/Item/Devops/ServiceDevOpsStarter')

' renders the element
ServiceDevOpsStarterCard('ServiceDevOpsStarterCard', 'Service Dev Ops Starter Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceDevOpsStarterCard
include('azure-20/Item/Devops/ServiceDevOpsStarter')

' renders the element
ServiceDevOpsStarterCard('ServiceDevOpsStarterCard', 'Service Dev Ops Starter Card', 'an optional description')
@enduml
```

## ServiceDevOpsStarterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceDevOpsStarterGroup
include('azure-20/Item/Devops/ServiceDevOpsStarter')

' renders the element
ServiceDevOpsStarterGroup('ServiceDevOpsStarterGroup', 'Service Dev Ops Starter Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceDevOpsStarterGroup
include('azure-20/Item/Devops/ServiceDevOpsStarter')

' renders the element
ServiceDevOpsStarterGroup('ServiceDevOpsStarterGroup', 'Service Dev Ops Starter Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

