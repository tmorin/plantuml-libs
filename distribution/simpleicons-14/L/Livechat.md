# Livechat


```text
simpleicons-14/L/Livechat
```

```text
include('simpleicons-14/L/Livechat')
```



| Illustration | Livechat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Livechat.png) | ![illustration for Livechat](../../simpleicons-14/L/Livechat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LivechatXs>`
- `<$LivechatSm>`
- `<$LivechatMd>`
- `<$LivechatLg>`





## Livechat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Livechat
include('simpleicons-14/L/Livechat')

' renders the element
Livechat('Livechat', 'Livechat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Livechat
include('simpleicons-14/L/Livechat')

' renders the element
Livechat('Livechat', 'Livechat', 'an optional tech label', 'an optional description')
@enduml
```

