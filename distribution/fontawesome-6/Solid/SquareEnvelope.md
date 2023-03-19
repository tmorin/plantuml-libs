# SquareEnvelope


```text
fontawesome-6/Solid/SquareEnvelope
```

```text
include('fontawesome-6/Solid/SquareEnvelope')
```



| Illustration | SquareEnvelope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareEnvelope.png) | ![illustration for SquareEnvelope](../../fontawesome-6/Solid/SquareEnvelope.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareEnvelope
include('fontawesome-6/Solid/SquareEnvelope')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareEnvelope
include('fontawesome-6/Solid/SquareEnvelope')

' renders the element
SquareEnvelope('SquareEnvelope', 'Square Envelope', 'an optional tech label', 'an optional description')
@enduml
```

