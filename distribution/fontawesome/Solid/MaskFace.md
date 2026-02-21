# MaskFace


```text
fontawesome/Solid/MaskFace
```

```text
include('fontawesome/Solid/MaskFace')
```



| Illustration | MaskFace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MaskFace.png) | ![illustration for MaskFace](../../fontawesome/Solid/MaskFace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MaskFaceXs>`
- `<$MaskFaceSm>`
- `<$MaskFaceMd>`
- `<$MaskFaceLg>`





## MaskFace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MaskFace
include('fontawesome/Solid/MaskFace')

' renders the element
MaskFace('MaskFace', 'Mask Face', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MaskFace
include('fontawesome/Solid/MaskFace')

' renders the element
MaskFace('MaskFace', 'Mask Face', 'an optional tech label', 'an optional description')
@enduml
```

