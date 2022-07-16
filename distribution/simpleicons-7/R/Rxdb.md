# Rxdb


```text
simpleicons-7/R/Rxdb
```

```text
include('simpleicons-7/R/Rxdb')
```



| Illustration | Rxdb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rxdb.png) | ![illustration for Rxdb](../../simpleicons-7/R/Rxdb.Local.png) |




## Rxdb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rxdb
include('simpleicons-7/R/Rxdb')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rxdb
include('simpleicons-7/R/Rxdb')

' renders the element
Rxdb('Rxdb', 'Rxdb', 'an optional tech label')
@enduml
```

