# EnvelopeOpen


```text
fontawesome-5/Regular/EnvelopeOpen
```

```text
include('fontawesome-5/Regular/EnvelopeOpen')
```



| Illustration | EnvelopeOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/EnvelopeOpen.png) | ![illustration for EnvelopeOpen](../../fontawesome-5/Regular/EnvelopeOpen.Local.png) |




## EnvelopeOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element EnvelopeOpen
include('fontawesome-5/Regular/EnvelopeOpen')

' renders the element
EnvelopeOpen('EnvelopeOpen', 'Envelope Open', 'an optional tech label')
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

' loads the Item which embeds the element EnvelopeOpen
include('fontawesome-5/Regular/EnvelopeOpen')

' renders the element
EnvelopeOpen('EnvelopeOpen', 'Envelope Open', 'an optional tech label')
@enduml
```

