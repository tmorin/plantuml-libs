# Coderwall

```text
simpleicons-4.1/C/Coderwall
```

```text
include('simpleicons-4.1/C/Coderwall')
```

|icon|element|
|---|---|
|![](Coderwall.png)|![](Coderwall.element.png)|



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
' loads the Coderwall element
include('simpleicons-4.1/C/Coderwall')
Coderwall('coderwall', 'Coderwall', 'an optional tech field')
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
' loads the Coderwall element
include('simpleicons-4.1/C/Coderwall')
Coderwall('coderwall', 'Coderwall', 'an optional tech field')
@enduml
```

