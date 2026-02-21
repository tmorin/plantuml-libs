# ClosedCaptioning


```text
fontawesome/Regular/ClosedCaptioning
```

```text
include('fontawesome/Regular/ClosedCaptioning')
```



| Illustration | ClosedCaptioning |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/ClosedCaptioning.png) | ![illustration for ClosedCaptioning](../../fontawesome/Regular/ClosedCaptioning.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClosedCaptioningXs>`
- `<$ClosedCaptioningSm>`
- `<$ClosedCaptioningMd>`
- `<$ClosedCaptioningLg>`





## ClosedCaptioning

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ClosedCaptioning
include('fontawesome/Regular/ClosedCaptioning')

' renders the element
ClosedCaptioning('ClosedCaptioning', 'Closed Captioning', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ClosedCaptioning
include('fontawesome/Regular/ClosedCaptioning')

' renders the element
ClosedCaptioning('ClosedCaptioning', 'Closed Captioning', 'an optional tech label', 'an optional description')
@enduml
```

