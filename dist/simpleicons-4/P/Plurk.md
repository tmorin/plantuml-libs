# Plurk

```text
simpleicons-4/P/Plurk
```

```text
include('simpleicons-4/P/Plurk')
```

|icon|element|
|---|---|
|![](Plurk.png)|![](Plurk.element.png)|



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
' loads the Plurk element
include('simpleicons-4/P/Plurk')
Plurk('plurk', 'Plurk', 'an optional tech field')
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
' loads the Plurk element
include('simpleicons-4/P/Plurk')
Plurk('plurk', 'Plurk', 'an optional tech field')
@enduml
```

