# Jameson

```text
simpleicons-4/J/Jameson
```

```text
include('simpleicons-4/J/Jameson')
```

|icon|element|
|---|---|
|![](Jameson.png)|![](Jameson.element.png)|



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
' loads the Jameson element
include('simpleicons-4/J/Jameson')
Jameson('jameson', 'Jameson', 'an optional tech field')
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
' loads the Jameson element
include('simpleicons-4/J/Jameson')
Jameson('jameson', 'Jameson', 'an optional tech field')
@enduml
```

