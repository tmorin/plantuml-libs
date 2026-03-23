# Walking


```text
fontawesome/Solid/Walking
```

```text
include('fontawesome/Solid/Walking')
```



| Illustration | Walking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Walking.png) | ![illustration for Walking](../../fontawesome/Solid/Walking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WalkingXs>`
- `<$WalkingSm>`
- `<$WalkingMd>`
- `<$WalkingLg>`





## Walking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Walking
include('fontawesome/Solid/Walking')

' renders the element
Walking('Walking', 'Walking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Walking
include('fontawesome/Solid/Walking')

' renders the element
Walking('Walking', 'Walking', 'an optional tech label', 'an optional description')
@enduml
```

