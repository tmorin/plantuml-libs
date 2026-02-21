# Irobot


```text
simpleicons/I/Irobot
```

```text
include('simpleicons/I/Irobot')
```



| Illustration | Irobot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Irobot.png) | ![illustration for Irobot](../../simpleicons/I/Irobot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IrobotXs>`
- `<$IrobotSm>`
- `<$IrobotMd>`
- `<$IrobotLg>`





## Irobot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Irobot
include('simpleicons/I/Irobot')

' renders the element
Irobot('Irobot', 'Irobot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Irobot
include('simpleicons/I/Irobot')

' renders the element
Irobot('Irobot', 'Irobot', 'an optional tech label', 'an optional description')
@enduml
```

