# Easyjet

```text
simpleicons-4.1/E/Easyjet
```

```text
include('simpleicons-4.1/E/Easyjet')
```

|icon|element|
|---|---|
|![](Easyjet.png)|![](Easyjet.element.png)|



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
' loads the Easyjet element
include('simpleicons-4.1/E/Easyjet')
Easyjet('easyjet', 'Easyjet', 'an optional tech field')
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
' loads the Easyjet element
include('simpleicons-4.1/E/Easyjet')
Easyjet('easyjet', 'Easyjet', 'an optional tech field')
@enduml
```

