# Mysql

```text
simpleicons-4/M/Mysql
```

```text
include('simpleicons-4/M/Mysql')
```

|icon|element|
|---|---|
|![](Mysql.png)|![](Mysql.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Mysql element
include('simpleicons-4/M/Mysql')
Mysql('mysql', 'Mysql', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Mysql element
include('simpleicons-4/M/Mysql')
Mysql('mysql', 'Mysql', 'an optional tech field')
@enduml
```

