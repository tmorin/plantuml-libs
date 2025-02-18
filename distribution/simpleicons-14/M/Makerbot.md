# Makerbot


```text
simpleicons-14/M/Makerbot
```

```text
include('simpleicons-14/M/Makerbot')
```



| Illustration | Makerbot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Makerbot.png) | ![illustration for Makerbot](../../simpleicons-14/M/Makerbot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MakerbotXs>`
- `<$MakerbotSm>`
- `<$MakerbotMd>`
- `<$MakerbotLg>`





## Makerbot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Makerbot
include('simpleicons-14/M/Makerbot')

' renders the element
Makerbot('Makerbot', 'Makerbot', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Makerbot
include('simpleicons-14/M/Makerbot')

' renders the element
Makerbot('Makerbot', 'Makerbot', 'an optional tech label', 'an optional description')
@enduml
```

