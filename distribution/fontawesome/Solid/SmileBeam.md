# SmileBeam


```text
fontawesome/Solid/SmileBeam
```

```text
include('fontawesome/Solid/SmileBeam')
```



| Illustration | SmileBeam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SmileBeam.png) | ![illustration for SmileBeam](../../fontawesome/Solid/SmileBeam.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmileBeamXs>`
- `<$SmileBeamSm>`
- `<$SmileBeamMd>`
- `<$SmileBeamLg>`





## SmileBeam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SmileBeam
include('fontawesome/Solid/SmileBeam')

' renders the element
SmileBeam('SmileBeam', 'Smile Beam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SmileBeam
include('fontawesome/Solid/SmileBeam')

' renders the element
SmileBeam('SmileBeam', 'Smile Beam', 'an optional tech label', 'an optional description')
@enduml
```

