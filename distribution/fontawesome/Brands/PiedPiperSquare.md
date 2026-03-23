# PiedPiperSquare


```text
fontawesome/Brands/PiedPiperSquare
```

```text
include('fontawesome/Brands/PiedPiperSquare')
```



| Illustration | PiedPiperSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/PiedPiperSquare.png) | ![illustration for PiedPiperSquare](../../fontawesome/Brands/PiedPiperSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PiedPiperSquareXs>`
- `<$PiedPiperSquareSm>`
- `<$PiedPiperSquareMd>`
- `<$PiedPiperSquareLg>`





## PiedPiperSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PiedPiperSquare
include('fontawesome/Brands/PiedPiperSquare')

' renders the element
PiedPiperSquare('PiedPiperSquare', 'Pied Piper Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PiedPiperSquare
include('fontawesome/Brands/PiedPiperSquare')

' renders the element
PiedPiperSquare('PiedPiperSquare', 'Pied Piper Square', 'an optional tech label', 'an optional description')
@enduml
```

