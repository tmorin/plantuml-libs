# ServiceStaticApps


```text
azure-4/Item/Preview/ServiceStaticApps
```

```text
include('azure-4/Item/Preview/ServiceStaticApps')
```



| Illustration | ServiceStaticApps | ServiceStaticAppsCard | ServiceStaticAppsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Preview/ServiceStaticApps.png) | ![illustration for ServiceStaticApps](../../../azure-4/Item/Preview/ServiceStaticApps.Local.png) | ![illustration for ServiceStaticAppsCard](../../../azure-4/Item/Preview/ServiceStaticAppsCard.Local.png) | ![illustration for ServiceStaticAppsGroup](../../../azure-4/Item/Preview/ServiceStaticAppsGroup.Local.png) |




## ServiceStaticApps

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStaticApps
include('azure-4/Item/Preview/ServiceStaticApps')

' renders the element
ServiceStaticApps('ServiceStaticApps', 'Service Static Apps', 'an optional tech label')
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

' loads the Item which embeds the element ServiceStaticApps
include('azure-4/Item/Preview/ServiceStaticApps')

' renders the element
ServiceStaticApps('ServiceStaticApps', 'Service Static Apps', 'an optional tech label')
@enduml
```

## ServiceStaticAppsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStaticAppsCard
include('azure-4/Item/Preview/ServiceStaticApps')

' renders the element
ServiceStaticAppsCard('ServiceStaticAppsCard', 'Service Static Apps Card', 'an optional description')
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

' loads the Item which embeds the element ServiceStaticAppsCard
include('azure-4/Item/Preview/ServiceStaticApps')

' renders the element
ServiceStaticAppsCard('ServiceStaticAppsCard', 'Service Static Apps Card', 'an optional description')
@enduml
```

## ServiceStaticAppsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceStaticAppsGroup
include('azure-4/Item/Preview/ServiceStaticApps')

' renders the element
ServiceStaticAppsGroup('ServiceStaticAppsGroup', 'Service Static Apps Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceStaticAppsGroup
include('azure-4/Item/Preview/ServiceStaticApps')

' renders the element
ServiceStaticAppsGroup('ServiceStaticAppsGroup', 'Service Static Apps Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

