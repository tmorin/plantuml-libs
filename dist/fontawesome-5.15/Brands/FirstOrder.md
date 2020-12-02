# First Order

```text
fontawesome-5.15/Brands/FirstOrder
```

```text
include('fontawesome-5.15/Brands/FirstOrder')
```

|icon|element|
|---|---|
|![](FirstOrder.png)|![](FirstOrder.element.png)|



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
' loads the FirstOrder element
include('fontawesome-5.15/Brands/FirstOrder')
FirstOrder('first_order', 'First Order', 'an optional tech field')
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
' loads the FirstOrder element
include('fontawesome-5.15/Brands/FirstOrder')
FirstOrder('first_order', 'First Order', 'an optional tech field')
@enduml
```

