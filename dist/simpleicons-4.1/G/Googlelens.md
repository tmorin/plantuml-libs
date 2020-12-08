# Googlelens

```text
simpleicons-4.1/G/Googlelens
```

```text
include('simpleicons-4.1/G/Googlelens')
```

|icon|element|
|---|---|
|![](Googlelens.png)|![](Googlelens.element.png)|



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
' loads the Googlelens element
include('simpleicons-4.1/G/Googlelens')
Googlelens('googlelens', 'Googlelens', 'an optional tech field')
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
' loads the Googlelens element
include('simpleicons-4.1/G/Googlelens')
Googlelens('googlelens', 'Googlelens', 'an optional tech field')
@enduml
```

