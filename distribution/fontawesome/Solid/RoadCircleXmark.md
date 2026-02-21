# RoadCircleXmark


```text
fontawesome/Solid/RoadCircleXmark
```

```text
include('fontawesome/Solid/RoadCircleXmark')
```



| Illustration | RoadCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RoadCircleXmark.png) | ![illustration for RoadCircleXmark](../../fontawesome/Solid/RoadCircleXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoadCircleXmarkXs>`
- `<$RoadCircleXmarkSm>`
- `<$RoadCircleXmarkMd>`
- `<$RoadCircleXmarkLg>`





## RoadCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RoadCircleXmark
include('fontawesome/Solid/RoadCircleXmark')

' renders the element
RoadCircleXmark('RoadCircleXmark', 'Road Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RoadCircleXmark
include('fontawesome/Solid/RoadCircleXmark')

' renders the element
RoadCircleXmark('RoadCircleXmark', 'Road Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

