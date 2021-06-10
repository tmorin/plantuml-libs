# PiedPiperSquare


```text
fontawesome-5/Brands/PiedPiperSquare
```

```text
include('fontawesome-5/Brands/PiedPiperSquare')
```



| Illustration | PiedPiperSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/PiedPiperSquare.png) | ![illustration for PiedPiperSquare](../../fontawesome-5/Brands/PiedPiperSquare.Local.png) |




## PiedPiperSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PiedPiperSquare
include('fontawesome-5/Brands/PiedPiperSquare')

' renders the element
PiedPiperSquare('PiedPiperSquare', 'Pied Piper Square', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PiedPiperSquare
include('fontawesome-5/Brands/PiedPiperSquare')

' renders the element
PiedPiperSquare('PiedPiperSquare', 'Pied Piper Square', 'an optional tech label')
@enduml
```

