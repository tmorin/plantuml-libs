# LandmarkDome


```text
fontawesome-6/Solid/LandmarkDome
```

```text
include('fontawesome-6/Solid/LandmarkDome')
```



| Illustration | LandmarkDome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LandmarkDome.png) | ![illustration for LandmarkDome](../../fontawesome-6/Solid/LandmarkDome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LandmarkDomeXs>`
- `<$LandmarkDomeSm>`
- `<$LandmarkDomeMd>`
- `<$LandmarkDomeLg>`





## LandmarkDome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LandmarkDome
include('fontawesome-6/Solid/LandmarkDome')

' renders the element
LandmarkDome('LandmarkDome', 'Landmark Dome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LandmarkDome
include('fontawesome-6/Solid/LandmarkDome')

' renders the element
LandmarkDome('LandmarkDome', 'Landmark Dome', 'an optional tech label', 'an optional description')
@enduml
```

