# Joint


```text
fontawesome/Solid/Joint
```

```text
include('fontawesome/Solid/Joint')
```



| Illustration | Joint |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Joint.png) | ![illustration for Joint](../../fontawesome/Solid/Joint.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JointXs>`
- `<$JointSm>`
- `<$JointMd>`
- `<$JointLg>`





## Joint

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Joint
include('fontawesome/Solid/Joint')

' renders the element
Joint('Joint', 'Joint', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Joint
include('fontawesome/Solid/Joint')

' renders the element
Joint('Joint', 'Joint', 'an optional tech label', 'an optional description')
@enduml
```

