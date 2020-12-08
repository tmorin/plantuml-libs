# Altiumdesigner

```text
simpleicons-4.1/A/Altiumdesigner
```

```text
include('simpleicons-4.1/A/Altiumdesigner')
```

|icon|element|
|---|---|
|![](Altiumdesigner.png)|![](Altiumdesigner.element.png)|



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
' loads the Altiumdesigner element
include('simpleicons-4.1/A/Altiumdesigner')
Altiumdesigner('altiumdesigner', 'Altiumdesigner', 'an optional tech field')
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
' loads the Altiumdesigner element
include('simpleicons-4.1/A/Altiumdesigner')
Altiumdesigner('altiumdesigner', 'Altiumdesigner', 'an optional tech field')
@enduml
```

