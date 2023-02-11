# ServiceProductionReadyDatabase


```text
azure-11/Item/General/ServiceProductionReadyDatabase
```

```text
include('azure-11/Item/General/ServiceProductionReadyDatabase')
```



| Illustration | ServiceProductionReadyDatabase | ServiceProductionReadyDatabaseCard | ServiceProductionReadyDatabaseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/General/ServiceProductionReadyDatabase.png) | ![illustration for ServiceProductionReadyDatabase](../../../azure-11/Item/General/ServiceProductionReadyDatabase.Local.png) | ![illustration for ServiceProductionReadyDatabaseCard](../../../azure-11/Item/General/ServiceProductionReadyDatabaseCard.Local.png) | ![illustration for ServiceProductionReadyDatabaseGroup](../../../azure-11/Item/General/ServiceProductionReadyDatabaseGroup.Local.png) |




## ServiceProductionReadyDatabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceProductionReadyDatabase
include('azure-11/Item/General/ServiceProductionReadyDatabase')

' renders the element
ServiceProductionReadyDatabase('ServiceProductionReadyDatabase', 'Service Production Ready Database', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceProductionReadyDatabase
include('azure-11/Item/General/ServiceProductionReadyDatabase')

' renders the element
ServiceProductionReadyDatabase('ServiceProductionReadyDatabase', 'Service Production Ready Database', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceProductionReadyDatabaseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceProductionReadyDatabaseCard
include('azure-11/Item/General/ServiceProductionReadyDatabase')

' renders the element
ServiceProductionReadyDatabaseCard('ServiceProductionReadyDatabaseCard', 'Service Production Ready Database Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceProductionReadyDatabaseCard
include('azure-11/Item/General/ServiceProductionReadyDatabase')

' renders the element
ServiceProductionReadyDatabaseCard('ServiceProductionReadyDatabaseCard', 'Service Production Ready Database Card', 'an optional description')
@enduml
```

## ServiceProductionReadyDatabaseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceProductionReadyDatabaseGroup
include('azure-11/Item/General/ServiceProductionReadyDatabase')

' renders the element
ServiceProductionReadyDatabaseGroup('ServiceProductionReadyDatabaseGroup', 'Service Production Ready Database Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceProductionReadyDatabaseGroup
include('azure-11/Item/General/ServiceProductionReadyDatabase')

' renders the element
ServiceProductionReadyDatabaseGroup('ServiceProductionReadyDatabaseGroup', 'Service Production Ready Database Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

