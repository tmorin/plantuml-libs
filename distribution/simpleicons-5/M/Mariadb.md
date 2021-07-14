# Mariadb


```text
simpleicons-5/M/Mariadb
```

```text
include('simpleicons-5/M/Mariadb')
```



| Illustration | Mariadb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Mariadb.png) | ![illustration for Mariadb](../../simpleicons-5/M/Mariadb.Local.png) |




## Mariadb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Mariadb
include('simpleicons-5/M/Mariadb')

' renders the element
Mariadb('Mariadb', 'Mariadb', 'an optional tech label')
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

' loads the Item which embeds the element Mariadb
include('simpleicons-5/M/Mariadb')

' renders the element
Mariadb('Mariadb', 'Mariadb', 'an optional tech label')
@enduml
```

