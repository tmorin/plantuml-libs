# PiedPiperHat


```text
fontawesome/Brands/PiedPiperHat
```

```text
include('fontawesome/Brands/PiedPiperHat')
```



| Illustration | PiedPiperHat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/PiedPiperHat.png) | ![illustration for PiedPiperHat](../../fontawesome/Brands/PiedPiperHat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PiedPiperHatXs>`
- `<$PiedPiperHatSm>`
- `<$PiedPiperHatMd>`
- `<$PiedPiperHatLg>`





## PiedPiperHat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PiedPiperHat
include('fontawesome/Brands/PiedPiperHat')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PiedPiperHat
include('fontawesome/Brands/PiedPiperHat')

' renders the element
PiedPiperHat('PiedPiperHat', 'Pied Piper Hat', 'an optional tech label', 'an optional description')
@enduml
```

