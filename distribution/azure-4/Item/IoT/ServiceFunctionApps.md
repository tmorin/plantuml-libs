# ServiceFunctionApps


```text
azure-4/Item/IoT/ServiceFunctionApps
```

```text
include('azure-4/Item/IoT/ServiceFunctionApps')
```



| Illustration | ServiceFunctionApps | ServiceFunctionAppsCard | ServiceFunctionAppsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/IoT/ServiceFunctionApps.png) | ![illustration for ServiceFunctionApps](../../../azure-4/Item/IoT/ServiceFunctionApps.Local.png) | ![illustration for ServiceFunctionAppsCard](../../../azure-4/Item/IoT/ServiceFunctionAppsCard.Local.png) | ![illustration for ServiceFunctionAppsGroup](../../../azure-4/Item/IoT/ServiceFunctionAppsGroup.Local.png) |




## ServiceFunctionApps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceFunctionApps
include('azure-4/Item/IoT/ServiceFunctionApps')

' renders the element
ServiceFunctionApps('ServiceFunctionApps', 'Service Function Apps', 'an optional tech label')
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

' loads the Item which embeds the element ServiceFunctionApps
include('azure-4/Item/IoT/ServiceFunctionApps')

' renders the element
ServiceFunctionApps('ServiceFunctionApps', 'Service Function Apps', 'an optional tech label')
@enduml
```

## ServiceFunctionAppsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceFunctionAppsCard
include('azure-4/Item/IoT/ServiceFunctionApps')

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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceFunctionAppsCard
include('azure-4/Item/IoT/ServiceFunctionApps')

' renders the element
ServiceFunctionAppsCard('ServiceFunctionAppsCard', 'Service Function Apps Card', 'an optional description')
@enduml
```

## ServiceFunctionAppsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceFunctionAppsGroup
include('azure-4/Item/IoT/ServiceFunctionApps')

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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceFunctionAppsGroup
include('azure-4/Item/IoT/ServiceFunctionApps')

' renders the element
ServiceFunctionAppsGroup('ServiceFunctionAppsGroup', 'Service Function Apps Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

