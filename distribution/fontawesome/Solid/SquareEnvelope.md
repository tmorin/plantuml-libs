# SquareEnvelope


```text
fontawesome/Solid/SquareEnvelope
```

```text
include('fontawesome/Solid/SquareEnvelope')
```



| Illustration | SquareEnvelope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SquareEnvelope.png) | ![illustration for SquareEnvelope](../../fontawesome/Solid/SquareEnvelope.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareEnvelopeXs>`
- `<$SquareEnvelopeSm>`
- `<$SquareEnvelopeMd>`
- `<$SquareEnvelopeLg>`





## SquareEnvelope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareEnvelope
include('fontawesome/Solid/SquareEnvelope')

' renders the element
SquareEnvelope('SquareEnvelope', 'Square Envelope', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareEnvelope
include('fontawesome/Solid/SquareEnvelope')

' renders the element
SquareEnvelope('SquareEnvelope', 'Square Envelope', 'an optional tech label', 'an optional description')
@enduml
```

