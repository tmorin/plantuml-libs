# PiedPiper


```text
fontawesome/Brands/PiedPiper
```

```text
include('fontawesome/Brands/PiedPiper')
```



| Illustration | PiedPiper |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/PiedPiper.png) | ![illustration for PiedPiper](../../fontawesome/Brands/PiedPiper.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PiedPiperXs>`
- `<$PiedPiperSm>`
- `<$PiedPiperMd>`
- `<$PiedPiperLg>`





## PiedPiper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PiedPiper
include('fontawesome/Brands/PiedPiper')

' renders the element
PiedPiper('PiedPiper', 'Pied Piper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PiedPiper
include('fontawesome/Brands/PiedPiper')

' renders the element
PiedPiper('PiedPiper', 'Pied Piper', 'an optional tech label', 'an optional description')
@enduml
```

