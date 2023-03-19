# Envelope


```text
fontawesome-6/Regular/Envelope
```

```text
include('fontawesome-6/Regular/Envelope')
```



| Illustration | Envelope |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Envelope.png) | ![illustration for Envelope](../../fontawesome-6/Regular/Envelope.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EnvelopeXs>`
- `<$EnvelopeSm>`
- `<$EnvelopeMd>`
- `<$EnvelopeLg>`





## Envelope

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Envelope
include('fontawesome-6/Regular/Envelope')

' renders the element
Envelope('Envelope', 'Envelope', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Envelope
include('fontawesome-6/Regular/Envelope')

' renders the element
Envelope('Envelope', 'Envelope', 'an optional tech label', 'an optional description')
@enduml
```

