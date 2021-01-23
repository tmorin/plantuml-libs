# Cucumber

```text
simpleicons-4/C/Cucumber
```

```text
include('simpleicons-4/C/Cucumber')
```

|icon|element|
|---|---|
|![](Cucumber.png)|![](Cucumber.element.png)|



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
' loads the Cucumber element
include('simpleicons-4/C/Cucumber')
Cucumber('cucumber', 'Cucumber', 'an optional tech field')
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
' loads the Cucumber element
include('simpleicons-4/C/Cucumber')
Cucumber('cucumber', 'Cucumber', 'an optional tech field')
@enduml
```

