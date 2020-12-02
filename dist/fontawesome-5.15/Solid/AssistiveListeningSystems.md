# Assistive Listening Systems

```text
fontawesome-5.15/Solid/AssistiveListeningSystems
```

```text
include('fontawesome-5.15/Solid/AssistiveListeningSystems')
```

|icon|element|
|---|---|
|![](AssistiveListeningSystems.png)|![](AssistiveListeningSystems.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the AssistiveListeningSystems element
include('fontawesome-5.15/Solid/AssistiveListeningSystems')
AssistiveListeningSystems('assistive_listening_systems', 'Assistive Listening Systems', 'an optional tech field')
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
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the AssistiveListeningSystems element
include('fontawesome-5.15/Solid/AssistiveListeningSystems')
AssistiveListeningSystems('assistive_listening_systems', 'Assistive Listening Systems', 'an optional tech field')
@enduml
```

