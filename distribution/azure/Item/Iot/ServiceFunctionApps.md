# ServiceFunctionApps


```text
azure/Item/Iot/ServiceFunctionApps
```

```text
include('azure/Item/Iot/ServiceFunctionApps')
```



| Illustration | ServiceFunctionApps | ServiceFunctionAppsCard | ServiceFunctionAppsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Iot/ServiceFunctionApps.png) | ![illustration for ServiceFunctionApps](../../../azure/Item/Iot/ServiceFunctionApps.Local.png) | ![illustration for ServiceFunctionAppsCard](../../../azure/Item/Iot/ServiceFunctionAppsCard.Local.png) | ![illustration for ServiceFunctionAppsGroup](../../../azure/Item/Iot/ServiceFunctionAppsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceFunctionAppsXs>`
- `<$ServiceFunctionAppsSm>`
- `<$ServiceFunctionAppsMd>`
- `<$ServiceFunctionAppsLg>`





## ServiceFunctionApps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceFunctionApps
include('azure/Item/Iot/ServiceFunctionApps')

' renders the element
ServiceFunctionApps('ServiceFunctionApps', 'Service Function Apps', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceFunctionApps
include('azure/Item/Iot/ServiceFunctionApps')

' renders the element
ServiceFunctionApps('ServiceFunctionApps', 'Service Function Apps', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceFunctionAppsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceFunctionAppsCard
include('azure/Item/Iot/ServiceFunctionApps')

' renders the element
ServiceFunctionAppsCard('ServiceFunctionAppsCard', 'Service Function Apps Card', 'an optional description')
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

' loads the Item which embeds the element ServiceFunctionAppsCard
include('azure/Item/Iot/ServiceFunctionApps')

' renders the element
ServiceFunctionAppsCard('ServiceFunctionAppsCard', 'Service Function Apps Card', 'an optional description')
@enduml
```

## ServiceFunctionAppsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceFunctionAppsGroup
include('azure/Item/Iot/ServiceFunctionApps')

' renders the element
ServiceFunctionAppsGroup('ServiceFunctionAppsGroup', 'Service Function Apps Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceFunctionAppsGroup
include('azure/Item/Iot/ServiceFunctionApps')

' renders the element
ServiceFunctionAppsGroup('ServiceFunctionAppsGroup', 'Service Function Apps Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

