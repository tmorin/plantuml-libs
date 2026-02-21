# Surrealdb


```text
simpleicons/S/Surrealdb
```

```text
include('simpleicons/S/Surrealdb')
```



| Illustration | Surrealdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Surrealdb.png) | ![illustration for Surrealdb](../../simpleicons/S/Surrealdb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SurrealdbXs>`
- `<$SurrealdbSm>`
- `<$SurrealdbMd>`
- `<$SurrealdbLg>`





## Surrealdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Surrealdb
include('simpleicons/S/Surrealdb')

' renders the element
Surrealdb('Surrealdb', 'Surrealdb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Surrealdb
include('simpleicons/S/Surrealdb')

' renders the element
Surrealdb('Surrealdb', 'Surrealdb', 'an optional tech label', 'an optional description')
@enduml
```

