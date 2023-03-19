# ServiceAzureSqlServerStretchDatabases


```text
azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases
```

```text
include('azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases')
```



| Illustration | ServiceAzureSqlServerStretchDatabases | ServiceAzureSqlServerStretchDatabasesCard | ServiceAzureSqlServerStretchDatabasesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases.png) | ![illustration for ServiceAzureSqlServerStretchDatabases](../../../azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases.Local.png) | ![illustration for ServiceAzureSqlServerStretchDatabasesCard](../../../azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabasesCard.Local.png) | ![illustration for ServiceAzureSqlServerStretchDatabasesGroup](../../../azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabasesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureSqlServerStretchDatabasesXs>`
- `<$ServiceAzureSqlServerStretchDatabasesSm>`
- `<$ServiceAzureSqlServerStretchDatabasesMd>`
- `<$ServiceAzureSqlServerStretchDatabasesLg>`





## ServiceAzureSqlServerStretchDatabases

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureSqlServerStretchDatabases
include('azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases')

' renders the element
ServiceAzureSqlServerStretchDatabases('ServiceAzureSqlServerStretchDatabases', 'Service Azure Sql Server Stretch Databases', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureSqlServerStretchDatabases
include('azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases')

' renders the element
ServiceAzureSqlServerStretchDatabases('ServiceAzureSqlServerStretchDatabases', 'Service Azure Sql Server Stretch Databases', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureSqlServerStretchDatabasesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureSqlServerStretchDatabasesCard
include('azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases')

' renders the element
ServiceAzureSqlServerStretchDatabasesCard('ServiceAzureSqlServerStretchDatabasesCard', 'Service Azure Sql Server Stretch Databases Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureSqlServerStretchDatabasesCard
include('azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases')

' renders the element
ServiceAzureSqlServerStretchDatabasesCard('ServiceAzureSqlServerStretchDatabasesCard', 'Service Azure Sql Server Stretch Databases Card', 'an optional description')
@enduml
```

## ServiceAzureSqlServerStretchDatabasesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceAzureSqlServerStretchDatabasesGroup
include('azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases')

' renders the element
ServiceAzureSqlServerStretchDatabasesGroup('ServiceAzureSqlServerStretchDatabasesGroup', 'Service Azure Sql Server Stretch Databases Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureSqlServerStretchDatabasesGroup
include('azure-11/Item/Integration/ServiceAzureSqlServerStretchDatabases')

' renders the element
ServiceAzureSqlServerStretchDatabasesGroup('ServiceAzureSqlServerStretchDatabasesGroup', 'Service Azure Sql Server Stretch Databases Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

