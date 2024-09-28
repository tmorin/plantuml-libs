# ServiceAzureDatabaseMySqlServer


```text
azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer
```

```text
include('azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer')
```



| Illustration | ServiceAzureDatabaseMySqlServer | ServiceAzureDatabaseMySqlServerCard | ServiceAzureDatabaseMySqlServerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer.png) | ![illustration for ServiceAzureDatabaseMySqlServer](../../../azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer.Local.png) | ![illustration for ServiceAzureDatabaseMySqlServerCard](../../../azure-19/Item/Databases/ServiceAzureDatabaseMySqlServerCard.Local.png) | ![illustration for ServiceAzureDatabaseMySqlServerGroup](../../../azure-19/Item/Databases/ServiceAzureDatabaseMySqlServerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureDatabaseMySqlServerXs>`
- `<$ServiceAzureDatabaseMySqlServerSm>`
- `<$ServiceAzureDatabaseMySqlServerMd>`
- `<$ServiceAzureDatabaseMySqlServerLg>`





## ServiceAzureDatabaseMySqlServer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureDatabaseMySqlServer
include('azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer')

' renders the element
ServiceAzureDatabaseMySqlServer('ServiceAzureDatabaseMySqlServer', 'Service Azure Database My Sql Server', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureDatabaseMySqlServer
include('azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer')

' renders the element
ServiceAzureDatabaseMySqlServer('ServiceAzureDatabaseMySqlServer', 'Service Azure Database My Sql Server', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureDatabaseMySqlServerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureDatabaseMySqlServerCard
include('azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer')

' renders the element
ServiceAzureDatabaseMySqlServerCard('ServiceAzureDatabaseMySqlServerCard', 'Service Azure Database My Sql Server Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureDatabaseMySqlServerCard
include('azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer')

' renders the element
ServiceAzureDatabaseMySqlServerCard('ServiceAzureDatabaseMySqlServerCard', 'Service Azure Database My Sql Server Card', 'an optional description')
@enduml
```

## ServiceAzureDatabaseMySqlServerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureDatabaseMySqlServerGroup
include('azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer')

' renders the element
ServiceAzureDatabaseMySqlServerGroup('ServiceAzureDatabaseMySqlServerGroup', 'Service Azure Database My Sql Server Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceAzureDatabaseMySqlServerGroup
include('azure-19/Item/Databases/ServiceAzureDatabaseMySqlServer')

' renders the element
ServiceAzureDatabaseMySqlServerGroup('ServiceAzureDatabaseMySqlServerGroup', 'Service Azure Database My Sql Server Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

