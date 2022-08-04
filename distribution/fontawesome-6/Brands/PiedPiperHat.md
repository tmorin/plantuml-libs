# PiedPiperHat


```text
fontawesome-6/Brands/PiedPiperHat
```

```text
include('fontawesome-6/Brands/PiedPiperHat')
```



| Illustration | PiedPiperHat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/PiedPiperHat.png) | ![illustration for PiedPiperHat](../../fontawesome-6/Brands/PiedPiperHat.Local.png) |




## PiedPiperHat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PiedPiperHat
include('fontawesome-6/Brands/PiedPiperHat')

' renders the element
PiedPiperHat('PiedPiperHat', 'Pied Piper Hat', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PiedPiperHat
include('fontawesome-6/Brands/PiedPiperHat')

' renders the element
PiedPiperHat('PiedPiperHat', 'Pied Piper Hat', 'an optional tech label', 'an optional description')
@enduml
```

