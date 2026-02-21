# Liberadotchat


```text
simpleicons/L/Liberadotchat
```

```text
include('simpleicons/L/Liberadotchat')
```



| Illustration | Liberadotchat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Liberadotchat.png) | ![illustration for Liberadotchat](../../simpleicons/L/Liberadotchat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LiberadotchatXs>`
- `<$LiberadotchatSm>`
- `<$LiberadotchatMd>`
- `<$LiberadotchatLg>`





## Liberadotchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Liberadotchat
include('simpleicons/L/Liberadotchat')

' renders the element
Liberadotchat('Liberadotchat', 'Liberadotchat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Liberadotchat
include('simpleicons/L/Liberadotchat')

' renders the element
Liberadotchat('Liberadotchat', 'Liberadotchat', 'an optional tech label', 'an optional description')
@enduml
```

