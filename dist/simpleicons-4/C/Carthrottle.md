# Carthrottle

```text
simpleicons-4/C/Carthrottle
```

```text
include('simpleicons-4/C/Carthrottle')
```

|icon|element|
|---|---|
|![](Carthrottle.png)|![](Carthrottle.element.png)|



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
' loads the Carthrottle element
include('simpleicons-4/C/Carthrottle')
Carthrottle('carthrottle', 'Carthrottle', 'an optional tech field')
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
' loads the Carthrottle element
include('simpleicons-4/C/Carthrottle')
Carthrottle('carthrottle', 'Carthrottle', 'an optional tech field')
@enduml
```

