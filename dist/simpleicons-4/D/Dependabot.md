# Dependabot

```text
simpleicons-4/D/Dependabot
```

```text
include('simpleicons-4/D/Dependabot')
```

|icon|element|
|---|---|
|![](Dependabot.png)|![](Dependabot.element.png)|



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
' loads the Dependabot element
include('simpleicons-4/D/Dependabot')
Dependabot('dependabot', 'Dependabot', 'an optional tech field')
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
' loads the Dependabot element
include('simpleicons-4/D/Dependabot')
Dependabot('dependabot', 'Dependabot', 'an optional tech field')
@enduml
```

