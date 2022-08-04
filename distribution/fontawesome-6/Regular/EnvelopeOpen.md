# EnvelopeOpen


```text
fontawesome-6/Regular/EnvelopeOpen
```

```text
include('fontawesome-6/Regular/EnvelopeOpen')
```



| Illustration | EnvelopeOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/EnvelopeOpen.png) | ![illustration for EnvelopeOpen](../../fontawesome-6/Regular/EnvelopeOpen.Local.png) |




## EnvelopeOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element EnvelopeOpen
include('fontawesome-6/Regular/EnvelopeOpen')

' renders the element
EnvelopeOpen('EnvelopeOpen', 'Envelope Open', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element EnvelopeOpen
include('fontawesome-6/Regular/EnvelopeOpen')

' renders the element
EnvelopeOpen('EnvelopeOpen', 'Envelope Open', 'an optional tech label', 'an optional description')
@enduml
```

