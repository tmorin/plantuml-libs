# Material Ui

```text
simpleicons-4.1/M/MaterialUi
```

```text
include('simpleicons-4.1/M/MaterialUi')
```

|icon|element|
|---|---|
|![](MaterialUi.png)|![](MaterialUi.element.png)|



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
' loads the MaterialUi element
include('simpleicons-4.1/M/MaterialUi')
MaterialUi('material_ui', 'Material Ui', 'an optional tech field')
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
' loads the MaterialUi element
include('simpleicons-4.1/M/MaterialUi')
MaterialUi('material_ui', 'Material Ui', 'an optional tech field')
@enduml
```

