# Scylladb


```text
simpleicons/S/Scylladb
```

```text
include('simpleicons/S/Scylladb')
```



| Illustration | Scylladb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Scylladb.png) | ![illustration for Scylladb](../../simpleicons/S/Scylladb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScylladbXs>`
- `<$ScylladbSm>`
- `<$ScylladbMd>`
- `<$ScylladbLg>`





## Scylladb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Scylladb
include('simpleicons/S/Scylladb')

' renders the element
Scylladb('Scylladb', 'Scylladb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scylladb
include('simpleicons/S/Scylladb')

' renders the element
Scylladb('Scylladb', 'Scylladb', 'an optional tech label', 'an optional description')
@enduml
```

