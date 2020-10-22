# Train

```text
material-4.0/Maps/Train
```

```text
include('material-4.0/Maps/Train')
```

|icon|element|
|---|---|
|![](Train.png)|![](Train.element.png)|



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
' loads the Train element
include('material-4.0/Maps/Train')
Train('train', 'Train', 'an optional tech field')
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
' loads the Train element
include('material-4.0/Maps/Train')
Train('train', 'Train', 'an optional tech field')
@enduml
```

