# Zelle

```text
simpleicons-4/Z/Zelle
```

```text
include('simpleicons-4/Z/Zelle')
```

|icon|element|
|---|---|
|![](Zelle.png)|![](Zelle.element.png)|



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
' loads the Zelle element
include('simpleicons-4/Z/Zelle')
Zelle('zelle', 'Zelle', 'an optional tech field')
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
' loads the Zelle element
include('simpleicons-4/Z/Zelle')
Zelle('zelle', 'Zelle', 'an optional tech field')
@enduml
```

