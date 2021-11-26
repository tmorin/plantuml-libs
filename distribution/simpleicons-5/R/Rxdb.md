# Rxdb


```text
simpleicons-5/R/Rxdb
```

```text
include('simpleicons-5/R/Rxdb')
```



| Illustration | Rxdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Rxdb.png) | ![illustration for Rxdb](../../simpleicons-5/R/Rxdb.Local.png) |




## Rxdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rxdb
include('simpleicons-5/R/Rxdb')

' renders the element
Rxdb('Rxdb', 'Rxdb', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Rxdb
include('simpleicons-5/R/Rxdb')

' renders the element
Rxdb('Rxdb', 'Rxdb', 'an optional tech label')
@enduml
```

