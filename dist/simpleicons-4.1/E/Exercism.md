# Exercism

```text
simpleicons-4.1/E/Exercism
```

```text
include('simpleicons-4.1/E/Exercism')
```

|icon|element|
|---|---|
|![](Exercism.png)|![](Exercism.element.png)|



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
' loads the Exercism element
include('simpleicons-4.1/E/Exercism')
Exercism('exercism', 'Exercism', 'an optional tech field')
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
' loads the Exercism element
include('simpleicons-4.1/E/Exercism')
Exercism('exercism', 'Exercism', 'an optional tech field')
@enduml
```

