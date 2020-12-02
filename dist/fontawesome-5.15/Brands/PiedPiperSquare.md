# Pied Piper Square

```text
fontawesome-5.15/Brands/PiedPiperSquare
```

```text
include('fontawesome-5.15/Brands/PiedPiperSquare')
```

|icon|element|
|---|---|
|![](PiedPiperSquare.png)|![](PiedPiperSquare.element.png)|



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
' loads the PiedPiperSquare element
include('fontawesome-5.15/Brands/PiedPiperSquare')
PiedPiperSquare('pied_piper_square', 'Pied Piper Square', 'an optional tech field')
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
' loads the PiedPiperSquare element
include('fontawesome-5.15/Brands/PiedPiperSquare')
PiedPiperSquare('pied_piper_square', 'Pied Piper Square', 'an optional tech field')
@enduml
```

