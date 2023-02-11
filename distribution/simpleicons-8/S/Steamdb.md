# Steamdb


```text
simpleicons-8/S/Steamdb
```

```text
include('simpleicons-8/S/Steamdb')
```



| Illustration | Steamdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Steamdb.png) | ![illustration for Steamdb](../../simpleicons-8/S/Steamdb.Local.png) |




## Steamdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Steamdb
include('simpleicons-8/S/Steamdb')

' renders the element
Steamdb('Steamdb', 'Steamdb', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Steamdb
include('simpleicons-8/S/Steamdb')

' renders the element
Steamdb('Steamdb', 'Steamdb', 'an optional tech label', 'an optional description')
@enduml
```

