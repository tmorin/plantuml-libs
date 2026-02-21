# Duckdb


```text
simpleicons/D/Duckdb
```

```text
include('simpleicons/D/Duckdb')
```



| Illustration | Duckdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Duckdb.png) | ![illustration for Duckdb](../../simpleicons/D/Duckdb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DuckdbXs>`
- `<$DuckdbSm>`
- `<$DuckdbMd>`
- `<$DuckdbLg>`





## Duckdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Duckdb
include('simpleicons/D/Duckdb')

' renders the element
Duckdb('Duckdb', 'Duckdb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Duckdb
include('simpleicons/D/Duckdb')

' renders the element
Duckdb('Duckdb', 'Duckdb', 'an optional tech label', 'an optional description')
@enduml
```

