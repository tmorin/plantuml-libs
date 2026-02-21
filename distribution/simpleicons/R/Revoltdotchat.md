# Revoltdotchat


```text
simpleicons/R/Revoltdotchat
```

```text
include('simpleicons/R/Revoltdotchat')
```



| Illustration | Revoltdotchat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Revoltdotchat.png) | ![illustration for Revoltdotchat](../../simpleicons/R/Revoltdotchat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RevoltdotchatXs>`
- `<$RevoltdotchatSm>`
- `<$RevoltdotchatMd>`
- `<$RevoltdotchatLg>`





## Revoltdotchat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Revoltdotchat
include('simpleicons/R/Revoltdotchat')

' renders the element
Revoltdotchat('Revoltdotchat', 'Revoltdotchat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Revoltdotchat
include('simpleicons/R/Revoltdotchat')

' renders the element
Revoltdotchat('Revoltdotchat', 'Revoltdotchat', 'an optional tech label', 'an optional description')
@enduml
```

