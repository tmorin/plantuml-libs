# Taobao

```text
simpleicons-4/T/Taobao
```

```text
include('simpleicons-4/T/Taobao')
```

|icon|element|
|---|---|
|![](Taobao.png)|![](Taobao.element.png)|



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
' loads the Taobao element
include('simpleicons-4/T/Taobao')
Taobao('taobao', 'Taobao', 'an optional tech field')
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
' loads the Taobao element
include('simpleicons-4/T/Taobao')
Taobao('taobao', 'Taobao', 'an optional tech field')
@enduml
```

