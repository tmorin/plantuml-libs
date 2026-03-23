# LaughBeam


```text
fontawesome/Regular/LaughBeam
```

```text
include('fontawesome/Regular/LaughBeam')
```



| Illustration | LaughBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/LaughBeam.png) | ![illustration for LaughBeam](../../fontawesome/Regular/LaughBeam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaughBeamXs>`
- `<$LaughBeamSm>`
- `<$LaughBeamMd>`
- `<$LaughBeamLg>`





## LaughBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LaughBeam
include('fontawesome/Regular/LaughBeam')

' renders the element
LaughBeam('LaughBeam', 'Laugh Beam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LaughBeam
include('fontawesome/Regular/LaughBeam')

' renders the element
LaughBeam('LaughBeam', 'Laugh Beam', 'an optional tech label', 'an optional description')
@enduml
```

