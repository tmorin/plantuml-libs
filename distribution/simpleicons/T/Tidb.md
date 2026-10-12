# Tidb


```text
simpleicons/T/Tidb
```

```text
include('simpleicons/T/Tidb')
```



| Illustration | Tidb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tidb.png) | ![illustration for Tidb](../../simpleicons/T/Tidb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TidbXs>`
- `<$TidbSm>`
- `<$TidbMd>`
- `<$TidbLg>`





## Tidb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tidb
include('simpleicons/T/Tidb')

' renders the element
Tidb('Tidb', 'Tidb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tidb
include('simpleicons/T/Tidb')

' renders the element
Tidb('Tidb', 'Tidb', 'an optional tech label', 'an optional description')
@enduml
```

