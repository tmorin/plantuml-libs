# PollH


```text
fontawesome/Solid/PollH
```

```text
include('fontawesome/Solid/PollH')
```



| Illustration | PollH |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PollH.png) | ![illustration for PollH](../../fontawesome/Solid/PollH.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PollHXs>`
- `<$PollHSm>`
- `<$PollHMd>`
- `<$PollHLg>`





## PollH

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PollH
include('fontawesome/Solid/PollH')

' renders the element
PollH('PollH', 'Poll H', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PollH
include('fontawesome/Solid/PollH')

' renders the element
PollH('PollH', 'Poll H', 'an optional tech label', 'an optional description')
@enduml
```

