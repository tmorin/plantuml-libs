# MarkChatUnread


```text
material/Communication/MarkChatUnread
```

```text
include('material/Communication/MarkChatUnread')
```



| Illustration | MarkChatUnread |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/MarkChatUnread.png) | ![illustration for MarkChatUnread](../../material/Communication/MarkChatUnread.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarkChatUnreadXs>`
- `<$MarkChatUnreadSm>`
- `<$MarkChatUnreadMd>`
- `<$MarkChatUnreadLg>`





## MarkChatUnread

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MarkChatUnread
include('material/Communication/MarkChatUnread')

' renders the element
MarkChatUnread('MarkChatUnread', 'Mark Chat Unread', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element MarkChatUnread
include('material/Communication/MarkChatUnread')

' renders the element
MarkChatUnread('MarkChatUnread', 'Mark Chat Unread', 'an optional tech label', 'an optional description')
@enduml
```

