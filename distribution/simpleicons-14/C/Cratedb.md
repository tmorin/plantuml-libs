# Cratedb


```text
simpleicons-14/C/Cratedb
```

```text
include('simpleicons-14/C/Cratedb')
```



| Illustration | Cratedb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cratedb.png) | ![illustration for Cratedb](../../simpleicons-14/C/Cratedb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CratedbXs>`
- `<$CratedbSm>`
- `<$CratedbMd>`
- `<$CratedbLg>`





## Cratedb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cratedb
include('simpleicons-14/C/Cratedb')

' renders the element
Cratedb('Cratedb', 'Cratedb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cratedb
include('simpleicons-14/C/Cratedb')

' renders the element
Cratedb('Cratedb', 'Cratedb', 'an optional tech label', 'an optional description')
@enduml
```

