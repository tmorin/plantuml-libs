# Prezi

```text
simpleicons-4.1/P/Prezi
```

```text
include('simpleicons-4.1/P/Prezi')
```

|icon|element|
|---|---|
|![](Prezi.png)|![](Prezi.element.png)|



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
' loads the Prezi element
include('simpleicons-4.1/P/Prezi')
Prezi('prezi', 'Prezi', 'an optional tech field')
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
' loads the Prezi element
include('simpleicons-4.1/P/Prezi')
Prezi('prezi', 'Prezi', 'an optional tech field')
@enduml
```

