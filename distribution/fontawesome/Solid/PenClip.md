# PenClip


```text
fontawesome/Solid/PenClip
```

```text
include('fontawesome/Solid/PenClip')
```



| Illustration | PenClip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PenClip.png) | ![illustration for PenClip](../../fontawesome/Solid/PenClip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PenClipXs>`
- `<$PenClipSm>`
- `<$PenClipMd>`
- `<$PenClipLg>`





## PenClip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PenClip
include('fontawesome/Solid/PenClip')

' renders the element
PenClip('PenClip', 'Pen Clip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PenClip
include('fontawesome/Solid/PenClip')

' renders the element
PenClip('PenClip', 'Pen Clip', 'an optional tech label', 'an optional description')
@enduml
```

