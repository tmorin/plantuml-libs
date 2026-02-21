# RoadCircleExclamation


```text
fontawesome/Solid/RoadCircleExclamation
```

```text
include('fontawesome/Solid/RoadCircleExclamation')
```



| Illustration | RoadCircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RoadCircleExclamation.png) | ![illustration for RoadCircleExclamation](../../fontawesome/Solid/RoadCircleExclamation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoadCircleExclamationXs>`
- `<$RoadCircleExclamationSm>`
- `<$RoadCircleExclamationMd>`
- `<$RoadCircleExclamationLg>`





## RoadCircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RoadCircleExclamation
include('fontawesome/Solid/RoadCircleExclamation')

' renders the element
RoadCircleExclamation('RoadCircleExclamation', 'Road Circle Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RoadCircleExclamation
include('fontawesome/Solid/RoadCircleExclamation')

' renders the element
RoadCircleExclamation('RoadCircleExclamation', 'Road Circle Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

