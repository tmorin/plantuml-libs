# PeoplePulling


```text
fontawesome-6/Solid/PeoplePulling
```

```text
include('fontawesome-6/Solid/PeoplePulling')
```



| Illustration | PeoplePulling |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PeoplePulling.png) | ![illustration for PeoplePulling](../../fontawesome-6/Solid/PeoplePulling.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PeoplePullingXs>`
- `<$PeoplePullingSm>`
- `<$PeoplePullingMd>`
- `<$PeoplePullingLg>`





## PeoplePulling

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PeoplePulling
include('fontawesome-6/Solid/PeoplePulling')

' renders the element
PeoplePulling('PeoplePulling', 'People Pulling', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeoplePulling
include('fontawesome-6/Solid/PeoplePulling')

' renders the element
PeoplePulling('PeoplePulling', 'People Pulling', 'an optional tech label', 'an optional description')
@enduml
```

