# PiedPiperHat


```text
fontawesome-5/Brands/PiedPiperHat
```

```text
include('fontawesome-5/Brands/PiedPiperHat')
```



| Illustration | PiedPiperHat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/PiedPiperHat.png) | ![illustration for PiedPiperHat](../../fontawesome-5/Brands/PiedPiperHat.Local.png) |




## PiedPiperHat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PiedPiperHat
include('fontawesome-5/Brands/PiedPiperHat')

' renders the element
PiedPiperHat('PiedPiperHat', 'Pied Piper Hat', 'an optional tech label')
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

' loads the Item which embeds the element PiedPiperHat
include('fontawesome-5/Brands/PiedPiperHat')

' renders the element
PiedPiperHat('PiedPiperHat', 'Pied Piper Hat', 'an optional tech label')
@enduml
```

