# Wechat


```text
simpleicons-14/W/Wechat
```

```text
include('simpleicons-14/W/Wechat')
```



| Illustration | Wechat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Wechat.png) | ![illustration for Wechat](../../simpleicons-14/W/Wechat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WechatXs>`
- `<$WechatSm>`
- `<$WechatMd>`
- `<$WechatLg>`





## Wechat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Wechat
include('simpleicons-14/W/Wechat')

' renders the element
Wechat('Wechat', 'Wechat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wechat
include('simpleicons-14/W/Wechat')

' renders the element
Wechat('Wechat', 'Wechat', 'an optional tech label', 'an optional description')
@enduml
```

