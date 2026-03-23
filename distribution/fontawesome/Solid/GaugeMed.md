# GaugeMed


```text
fontawesome/Solid/GaugeMed
```

```text
include('fontawesome/Solid/GaugeMed')
```



| Illustration | GaugeMed |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/GaugeMed.png) | ![illustration for GaugeMed](../../fontawesome/Solid/GaugeMed.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GaugeMedXs>`
- `<$GaugeMedSm>`
- `<$GaugeMedMd>`
- `<$GaugeMedLg>`





## GaugeMed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element GaugeMed
include('fontawesome/Solid/GaugeMed')

' renders the element
GaugeMed('GaugeMed', 'Gauge Med', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GaugeMed
include('fontawesome/Solid/GaugeMed')

' renders the element
GaugeMed('GaugeMed', 'Gauge Med', 'an optional tech label', 'an optional description')
@enduml
```

