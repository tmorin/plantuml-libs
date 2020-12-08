# Douban

```text
simpleicons-4.1/D/Douban
```

```text
include('simpleicons-4.1/D/Douban')
```

|icon|element|
|---|---|
|![](Douban.png)|![](Douban.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Douban element
include('simpleicons-4.1/D/Douban')
Douban('douban', 'Douban', 'an optional tech field')
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
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Douban element
include('simpleicons-4.1/D/Douban')
Douban('douban', 'Douban', 'an optional tech field')
@enduml
```

