# Adobedreamweaver

```text
simpleicons-4/A/Adobedreamweaver
```

```text
include('simpleicons-4/A/Adobedreamweaver')
```

|icon|element|
|---|---|
|![](Adobedreamweaver.png)|![](Adobedreamweaver.element.png)|



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
' loads the Adobedreamweaver element
include('simpleicons-4/A/Adobedreamweaver')
Adobedreamweaver('adobedreamweaver', 'Adobedreamweaver', 'an optional tech field')
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
' loads the Adobedreamweaver element
include('simpleicons-4/A/Adobedreamweaver')
Adobedreamweaver('adobedreamweaver', 'Adobedreamweaver', 'an optional tech field')
@enduml
```

