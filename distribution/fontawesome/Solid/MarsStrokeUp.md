# MarsStrokeUp


```text
fontawesome/Solid/MarsStrokeUp
```

```text
include('fontawesome/Solid/MarsStrokeUp')
```



| Illustration | MarsStrokeUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MarsStrokeUp.png) | ![illustration for MarsStrokeUp](../../fontawesome/Solid/MarsStrokeUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarsStrokeUpXs>`
- `<$MarsStrokeUpSm>`
- `<$MarsStrokeUpMd>`
- `<$MarsStrokeUpLg>`





## MarsStrokeUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MarsStrokeUp
include('fontawesome/Solid/MarsStrokeUp')

' renders the element
MarsStrokeUp('MarsStrokeUp', 'Mars Stroke Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MarsStrokeUp
include('fontawesome/Solid/MarsStrokeUp')

' renders the element
MarsStrokeUp('MarsStrokeUp', 'Mars Stroke Up', 'an optional tech label', 'an optional description')
@enduml
```

