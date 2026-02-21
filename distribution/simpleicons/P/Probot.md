# Probot


```text
simpleicons/P/Probot
```

```text
include('simpleicons/P/Probot')
```



| Illustration | Probot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Probot.png) | ![illustration for Probot](../../simpleicons/P/Probot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProbotXs>`
- `<$ProbotSm>`
- `<$ProbotMd>`
- `<$ProbotLg>`





## Probot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Probot
include('simpleicons/P/Probot')

' renders the element
Probot('Probot', 'Probot', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Probot
include('simpleicons/P/Probot')

' renders the element
Probot('Probot', 'Probot', 'an optional tech label', 'an optional description')
@enduml
```

