# Peace


```text
fontawesome/Solid/Peace
```

```text
include('fontawesome/Solid/Peace')
```



| Illustration | Peace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Peace.png) | ![illustration for Peace](../../fontawesome/Solid/Peace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeaceXs>`
- `<$PeaceSm>`
- `<$PeaceMd>`
- `<$PeaceLg>`





## Peace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Peace
include('fontawesome/Solid/Peace')

' renders the element
Peace('Peace', 'Peace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Peace
include('fontawesome/Solid/Peace')

' renders the element
Peace('Peace', 'Peace', 'an optional tech label', 'an optional description')
@enduml
```

