# ServiceSqlServer


```text
azure-17/Item/Databases/ServiceSqlServer
```

```text
include('azure-17/Item/Databases/ServiceSqlServer')
```



| Illustration | ServiceSqlServer | ServiceSqlServerCard | ServiceSqlServerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Databases/ServiceSqlServer.png) | ![illustration for ServiceSqlServer](../../../azure-17/Item/Databases/ServiceSqlServer.Local.png) | ![illustration for ServiceSqlServerCard](../../../azure-17/Item/Databases/ServiceSqlServerCard.Local.png) | ![illustration for ServiceSqlServerGroup](../../../azure-17/Item/Databases/ServiceSqlServerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceSqlServerXs>`
- `<$ServiceSqlServerSm>`
- `<$ServiceSqlServerMd>`
- `<$ServiceSqlServerLg>`





## ServiceSqlServer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceSqlServer
include('azure-17/Item/Databases/ServiceSqlServer')

' renders the element
ServiceSqlServer('ServiceSqlServer', 'Service Sql Server', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceSqlServer
include('azure-17/Item/Databases/ServiceSqlServer')

' renders the element
ServiceSqlServer('ServiceSqlServer', 'Service Sql Server', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSqlServerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceSqlServerCard
include('azure-17/Item/Databases/ServiceSqlServer')

' renders the element
ServiceSqlServerCard('ServiceSqlServerCard', 'Service Sql Server Card', 'an optional description')
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

' loads the Item which embeds the element ServiceSqlServerCard
include('azure-17/Item/Databases/ServiceSqlServer')

' renders the element
ServiceSqlServerCard('ServiceSqlServerCard', 'Service Sql Server Card', 'an optional description')
@enduml
```

## ServiceSqlServerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceSqlServerGroup
include('azure-17/Item/Databases/ServiceSqlServer')

' renders the element
ServiceSqlServerGroup('ServiceSqlServerGroup', 'Service Sql Server Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceSqlServerGroup
include('azure-17/Item/Databases/ServiceSqlServer')

' renders the element
ServiceSqlServerGroup('ServiceSqlServerGroup', 'Service Sql Server Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

