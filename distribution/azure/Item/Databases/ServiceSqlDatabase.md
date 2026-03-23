# ServiceSqlDatabase


```text
azure/Item/Databases/ServiceSqlDatabase
```

```text
include('azure/Item/Databases/ServiceSqlDatabase')
```



| Illustration | ServiceSqlDatabase | ServiceSqlDatabaseCard | ServiceSqlDatabaseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Databases/ServiceSqlDatabase.png) | ![illustration for ServiceSqlDatabase](../../../azure/Item/Databases/ServiceSqlDatabase.Local.png) | ![illustration for ServiceSqlDatabaseCard](../../../azure/Item/Databases/ServiceSqlDatabaseCard.Local.png) | ![illustration for ServiceSqlDatabaseGroup](../../../azure/Item/Databases/ServiceSqlDatabaseGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceSqlDatabaseXs>`
- `<$ServiceSqlDatabaseSm>`
- `<$ServiceSqlDatabaseMd>`
- `<$ServiceSqlDatabaseLg>`





## ServiceSqlDatabase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceSqlDatabase
include('azure/Item/Databases/ServiceSqlDatabase')

' renders the element
ServiceSqlDatabase('ServiceSqlDatabase', 'Service Sql Database', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceSqlDatabase
include('azure/Item/Databases/ServiceSqlDatabase')

' renders the element
ServiceSqlDatabase('ServiceSqlDatabase', 'Service Sql Database', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSqlDatabaseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceSqlDatabaseCard
include('azure/Item/Databases/ServiceSqlDatabase')

' renders the element
ServiceSqlDatabaseCard('ServiceSqlDatabaseCard', 'Service Sql Database Card', 'an optional description')
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

' loads the Item which embeds the element ServiceSqlDatabaseCard
include('azure/Item/Databases/ServiceSqlDatabase')

' renders the element
ServiceSqlDatabaseCard('ServiceSqlDatabaseCard', 'Service Sql Database Card', 'an optional description')
@enduml
```

## ServiceSqlDatabaseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceSqlDatabaseGroup
include('azure/Item/Databases/ServiceSqlDatabase')

' renders the element
ServiceSqlDatabaseGroup('ServiceSqlDatabaseGroup', 'Service Sql Database Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceSqlDatabaseGroup
include('azure/Item/Databases/ServiceSqlDatabase')

' renders the element
ServiceSqlDatabaseGroup('ServiceSqlDatabaseGroup', 'Service Sql Database Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

