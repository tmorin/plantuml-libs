# Clone


```text
fontawesome/Solid/Clone
```

```text
include('fontawesome/Solid/Clone')
```



| Illustration | Clone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Clone.png) | ![illustration for Clone](../../fontawesome/Solid/Clone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloneXs>`
- `<$CloneSm>`
- `<$CloneMd>`
- `<$CloneLg>`





## Clone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Clone
include('fontawesome/Solid/Clone')

' renders the element
Clone('Clone', 'Clone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clone
include('fontawesome/Solid/Clone')

' renders the element
Clone('Clone', 'Clone', 'an optional tech label', 'an optional description')
@enduml
```

