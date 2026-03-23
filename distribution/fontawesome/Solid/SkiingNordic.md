# SkiingNordic


```text
fontawesome/Solid/SkiingNordic
```

```text
include('fontawesome/Solid/SkiingNordic')
```



| Illustration | SkiingNordic |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SkiingNordic.png) | ![illustration for SkiingNordic](../../fontawesome/Solid/SkiingNordic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SkiingNordicXs>`
- `<$SkiingNordicSm>`
- `<$SkiingNordicMd>`
- `<$SkiingNordicLg>`





## SkiingNordic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SkiingNordic
include('fontawesome/Solid/SkiingNordic')

' renders the element
SkiingNordic('SkiingNordic', 'Skiing Nordic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SkiingNordic
include('fontawesome/Solid/SkiingNordic')

' renders the element
SkiingNordic('SkiingNordic', 'Skiing Nordic', 'an optional tech label', 'an optional description')
@enduml
```

