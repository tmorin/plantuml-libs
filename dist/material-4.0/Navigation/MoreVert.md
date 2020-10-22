# More Vert

```text
material-4.0/Navigation/MoreVert
```

```text
include('material-4.0/Navigation/MoreVert')
```

|icon|element|
|---|---|
|![](MoreVert.png)|![](MoreVert.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the MoreVert element
include('material-4.0/Navigation/MoreVert')
MoreVert('more_vert', 'More Vert', 'an optional tech field')
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
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the MoreVert element
include('material-4.0/Navigation/MoreVert')
MoreVert('more_vert', 'More Vert', 'an optional tech field')
@enduml
```

