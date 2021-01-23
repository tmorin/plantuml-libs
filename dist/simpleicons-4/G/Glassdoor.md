# Glassdoor

```text
simpleicons-4/G/Glassdoor
```

```text
include('simpleicons-4/G/Glassdoor')
```

|icon|element|
|---|---|
|![](Glassdoor.png)|![](Glassdoor.element.png)|



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
' loads the Glassdoor element
include('simpleicons-4/G/Glassdoor')
Glassdoor('glassdoor', 'Glassdoor', 'an optional tech field')
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
' loads the Glassdoor element
include('simpleicons-4/G/Glassdoor')
Glassdoor('glassdoor', 'Glassdoor', 'an optional tech field')
@enduml
```

