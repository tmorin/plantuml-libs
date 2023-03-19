# ShuttleSpace


```text
fontawesome-6/Solid/ShuttleSpace
```

```text
include('fontawesome-6/Solid/ShuttleSpace')
```



| Illustration | ShuttleSpace |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ShuttleSpace.png) | ![illustration for ShuttleSpace](../../fontawesome-6/Solid/ShuttleSpace.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShuttleSpace
include('fontawesome-6/Solid/ShuttleSpace')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ShuttleSpace
include('fontawesome-6/Solid/ShuttleSpace')

' renders the element
ShuttleSpace('ShuttleSpace', 'Shuttle Space', 'an optional tech label', 'an optional description')
@enduml
```

