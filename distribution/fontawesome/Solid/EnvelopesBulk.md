# EnvelopesBulk


```text
fontawesome/Solid/EnvelopesBulk
```

```text
include('fontawesome/Solid/EnvelopesBulk')
```



| Illustration | EnvelopesBulk |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/EnvelopesBulk.png) | ![illustration for EnvelopesBulk](../../fontawesome/Solid/EnvelopesBulk.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EnvelopesBulkXs>`
- `<$EnvelopesBulkSm>`
- `<$EnvelopesBulkMd>`
- `<$EnvelopesBulkLg>`





## EnvelopesBulk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element EnvelopesBulk
include('fontawesome/Solid/EnvelopesBulk')

' renders the element
EnvelopesBulk('EnvelopesBulk', 'Envelopes Bulk', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EnvelopesBulk
include('fontawesome/Solid/EnvelopesBulk')

' renders the element
EnvelopesBulk('EnvelopesBulk', 'Envelopes Bulk', 'an optional tech label', 'an optional description')
@enduml
```

