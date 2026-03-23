# EnvelopeSquare


```text
fontawesome/Solid/EnvelopeSquare
```

```text
include('fontawesome/Solid/EnvelopeSquare')
```



| Illustration | EnvelopeSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EnvelopeSquare.png) | ![illustration for EnvelopeSquare](../../fontawesome/Solid/EnvelopeSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EnvelopeSquareXs>`
- `<$EnvelopeSquareSm>`
- `<$EnvelopeSquareMd>`
- `<$EnvelopeSquareLg>`





## EnvelopeSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EnvelopeSquare
include('fontawesome/Solid/EnvelopeSquare')

' renders the element
EnvelopeSquare('EnvelopeSquare', 'Envelope Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EnvelopeSquare
include('fontawesome/Solid/EnvelopeSquare')

' renders the element
EnvelopeSquare('EnvelopeSquare', 'Envelope Square', 'an optional tech label', 'an optional description')
@enduml
```

