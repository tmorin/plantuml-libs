# Openai

```text
simpleicons-4.1/O/Openai
```

```text
include('simpleicons-4.1/O/Openai')
```

|icon|element|
|---|---|
|![](Openai.png)|![](Openai.element.png)|



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
' loads the Openai element
include('simpleicons-4.1/O/Openai')
Openai('openai', 'Openai', 'an optional tech field')
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
' loads the Openai element
include('simpleicons-4.1/O/Openai')
Openai('openai', 'Openai', 'an optional tech field')
@enduml
```

