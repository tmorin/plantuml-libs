# ClosedCaptioning


```text
fontawesome-6/Solid/ClosedCaptioning
```

```text
include('fontawesome-6/Solid/ClosedCaptioning')
```



| Illustration | ClosedCaptioning |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ClosedCaptioning.png) | ![illustration for ClosedCaptioning](../../fontawesome-6/Solid/ClosedCaptioning.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ClosedCaptioning
include('fontawesome-6/Solid/ClosedCaptioning')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ClosedCaptioning
include('fontawesome-6/Solid/ClosedCaptioning')

' renders the element
ClosedCaptioning('ClosedCaptioning', 'Closed Captioning', 'an optional tech label', 'an optional description')
@enduml
```

