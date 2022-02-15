# Protondb


```text
simpleicons-6/P/Protondb
```

```text
include('simpleicons-6/P/Protondb')
```



| Illustration | Protondb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/P/Protondb.png) | ![illustration for Protondb](../../simpleicons-6/P/Protondb.Local.png) |




## Protondb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Protondb
include('simpleicons-6/P/Protondb')

' renders the element
Protondb('Protondb', 'Protondb', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Protondb
include('simpleicons-6/P/Protondb')

' renders the element
Protondb('Protondb', 'Protondb', 'an optional tech label')
@enduml
```

