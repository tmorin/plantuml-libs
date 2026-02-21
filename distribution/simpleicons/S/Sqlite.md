# Sqlite


```text
simpleicons/S/Sqlite
```

```text
include('simpleicons/S/Sqlite')
```



| Illustration | Sqlite |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sqlite.png) | ![illustration for Sqlite](../../simpleicons/S/Sqlite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SqliteXs>`
- `<$SqliteSm>`
- `<$SqliteMd>`
- `<$SqliteLg>`





## Sqlite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sqlite
include('simpleicons/S/Sqlite')

' renders the element
Sqlite('Sqlite', 'Sqlite', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sqlite
include('simpleicons/S/Sqlite')

' renders the element
Sqlite('Sqlite', 'Sqlite', 'an optional tech label', 'an optional description')
@enduml
```

