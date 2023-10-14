# ServiceModule


```text
azure-17/Item/General/ServiceModule
```

```text
include('azure-17/Item/General/ServiceModule')
```



| Illustration | ServiceModule | ServiceModuleCard | ServiceModuleGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/General/ServiceModule.png) | ![illustration for ServiceModule](../../../azure-17/Item/General/ServiceModule.Local.png) | ![illustration for ServiceModuleCard](../../../azure-17/Item/General/ServiceModuleCard.Local.png) | ![illustration for ServiceModuleGroup](../../../azure-17/Item/General/ServiceModuleGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceModuleXs>`
- `<$ServiceModuleSm>`
- `<$ServiceModuleMd>`
- `<$ServiceModuleLg>`





## ServiceModule

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceModule
include('azure-17/Item/General/ServiceModule')

' renders the element
ServiceModule('ServiceModule', 'Service Module', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceModule
include('azure-17/Item/General/ServiceModule')

' renders the element
ServiceModule('ServiceModule', 'Service Module', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceModuleCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceModuleCard
include('azure-17/Item/General/ServiceModule')

' renders the element
ServiceModuleCard('ServiceModuleCard', 'Service Module Card', 'an optional description')
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

' loads the Item which embeds the element ServiceModuleCard
include('azure-17/Item/General/ServiceModule')

' renders the element
ServiceModuleCard('ServiceModuleCard', 'Service Module Card', 'an optional description')
@enduml
```

## ServiceModuleGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceModuleGroup
include('azure-17/Item/General/ServiceModule')

' renders the element
ServiceModuleGroup('ServiceModuleGroup', 'Service Module Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceModuleGroup
include('azure-17/Item/General/ServiceModule')

' renders the element
ServiceModuleGroup('ServiceModuleGroup', 'Service Module Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

