# LandmarkAlt


```text
fontawesome/Solid/LandmarkAlt
```

```text
include('fontawesome/Solid/LandmarkAlt')
```



| Illustration | LandmarkAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LandmarkAlt.png) | ![illustration for LandmarkAlt](../../fontawesome/Solid/LandmarkAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LandmarkAltXs>`
- `<$LandmarkAltSm>`
- `<$LandmarkAltMd>`
- `<$LandmarkAltLg>`





## LandmarkAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LandmarkAlt
include('fontawesome/Solid/LandmarkAlt')

' renders the element
LandmarkAlt('LandmarkAlt', 'Landmark Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LandmarkAlt
include('fontawesome/Solid/LandmarkAlt')

' renders the element
LandmarkAlt('LandmarkAlt', 'Landmark Alt', 'an optional tech label', 'an optional description')
@enduml
```

