# Mysql


```text
simpleicons-6/M/Mysql
```

```text
include('simpleicons-6/M/Mysql')
```



| Illustration | Mysql |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/M/Mysql.png) | ![illustration for Mysql](../../simpleicons-6/M/Mysql.Local.png) |




## Mysql

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Mysql
include('simpleicons-6/M/Mysql')

' renders the element
Mysql('Mysql', 'Mysql', 'an optional tech label')
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

' loads the Item which embeds the element Mysql
include('simpleicons-6/M/Mysql')

' renders the element
Mysql('Mysql', 'Mysql', 'an optional tech label')
@enduml
```

