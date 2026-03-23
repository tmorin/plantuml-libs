# HatHard


```text
fontawesome/Solid/HatHard
```

```text
include('fontawesome/Solid/HatHard')
```



| Illustration | HatHard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HatHard.png) | ![illustration for HatHard](../../fontawesome/Solid/HatHard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HatHardXs>`
- `<$HatHardSm>`
- `<$HatHardMd>`
- `<$HatHardLg>`





## HatHard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HatHard
include('fontawesome/Solid/HatHard')

' renders the element
HatHard('HatHard', 'Hat Hard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HatHard
include('fontawesome/Solid/HatHard')

' renders the element
HatHard('HatHard', 'Hat Hard', 'an optional tech label', 'an optional description')
@enduml
```

