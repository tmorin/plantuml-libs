# Scylladb


```text
simpleicons-14/S/Scylladb
```

```text
include('simpleicons-14/S/Scylladb')
```



| Illustration | Scylladb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Scylladb.png) | ![illustration for Scylladb](../../simpleicons-14/S/Scylladb.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scylladb
include('simpleicons-14/S/Scylladb')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scylladb
include('simpleicons-14/S/Scylladb')

' renders the element
Scylladb('Scylladb', 'Scylladb', 'an optional tech label', 'an optional description')
@enduml
```

