# RoadCircleCheck


```text
fontawesome/Solid/RoadCircleCheck
```

```text
include('fontawesome/Solid/RoadCircleCheck')
```



| Illustration | RoadCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RoadCircleCheck.png) | ![illustration for RoadCircleCheck](../../fontawesome/Solid/RoadCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoadCircleCheckXs>`
- `<$RoadCircleCheckSm>`
- `<$RoadCircleCheckMd>`
- `<$RoadCircleCheckLg>`





## RoadCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RoadCircleCheck
include('fontawesome/Solid/RoadCircleCheck')

' renders the element
RoadCircleCheck('RoadCircleCheck', 'Road Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RoadCircleCheck
include('fontawesome/Solid/RoadCircleCheck')

' renders the element
RoadCircleCheck('RoadCircleCheck', 'Road Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

