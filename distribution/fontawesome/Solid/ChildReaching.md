# ChildReaching


```text
fontawesome/Solid/ChildReaching
```

```text
include('fontawesome/Solid/ChildReaching')
```



| Illustration | ChildReaching |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChildReaching.png) | ![illustration for ChildReaching](../../fontawesome/Solid/ChildReaching.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChildReachingXs>`
- `<$ChildReachingSm>`
- `<$ChildReachingMd>`
- `<$ChildReachingLg>`





## ChildReaching

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChildReaching
include('fontawesome/Solid/ChildReaching')

' renders the element
ChildReaching('ChildReaching', 'Child Reaching', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChildReaching
include('fontawesome/Solid/ChildReaching')

' renders the element
ChildReaching('ChildReaching', 'Child Reaching', 'an optional tech label', 'an optional description')
@enduml
```

