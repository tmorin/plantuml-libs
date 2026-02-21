# Greptimedb


```text
simpleicons/G/Greptimedb
```

```text
include('simpleicons/G/Greptimedb')
```



| Illustration | Greptimedb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Greptimedb.png) | ![illustration for Greptimedb](../../simpleicons/G/Greptimedb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GreptimedbXs>`
- `<$GreptimedbSm>`
- `<$GreptimedbMd>`
- `<$GreptimedbLg>`





## Greptimedb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Greptimedb
include('simpleicons/G/Greptimedb')

' renders the element
Greptimedb('Greptimedb', 'Greptimedb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Greptimedb
include('simpleicons/G/Greptimedb')

' renders the element
Greptimedb('Greptimedb', 'Greptimedb', 'an optional tech label', 'an optional description')
@enduml
```

