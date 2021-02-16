# Chakraui

```text
simpleicons-4/C/Chakraui
```

```text
include('simpleicons-4/C/Chakraui')
```

|icon|element|
|---|---|
|![](Chakraui.png)|![](Chakraui.element.png)|



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
' loads the Chakraui element
include('simpleicons-4/C/Chakraui')
Chakraui('chakraui', 'Chakraui', 'an optional tech field')
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
' loads the Chakraui element
include('simpleicons-4/C/Chakraui')
Chakraui('chakraui', 'Chakraui', 'an optional tech field')
@enduml
```

