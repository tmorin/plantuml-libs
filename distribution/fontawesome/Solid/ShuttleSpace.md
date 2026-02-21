# ShuttleSpace


```text
fontawesome/Solid/ShuttleSpace
```

```text
include('fontawesome/Solid/ShuttleSpace')
```



| Illustration | ShuttleSpace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShuttleSpace.png) | ![illustration for ShuttleSpace](../../fontawesome/Solid/ShuttleSpace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShuttleSpaceXs>`
- `<$ShuttleSpaceSm>`
- `<$ShuttleSpaceMd>`
- `<$ShuttleSpaceLg>`





## ShuttleSpace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShuttleSpace
include('fontawesome/Solid/ShuttleSpace')

' renders the element
ShuttleSpace('ShuttleSpace', 'Shuttle Space', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShuttleSpace
include('fontawesome/Solid/ShuttleSpace')

' renders the element
ShuttleSpace('ShuttleSpace', 'Shuttle Space', 'an optional tech label', 'an optional description')
@enduml
```

