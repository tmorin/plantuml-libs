# Cratedb


```text
simpleicons/C/Cratedb
```

```text
include('simpleicons/C/Cratedb')
```



| Illustration | Cratedb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cratedb.png) | ![illustration for Cratedb](../../simpleicons/C/Cratedb.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cratedb
include('simpleicons/C/Cratedb')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cratedb
include('simpleicons/C/Cratedb')

' renders the element
Cratedb('Cratedb', 'Cratedb', 'an optional tech label', 'an optional description')
@enduml
```

