# MarkChatUnread


```text
material-4/Communication/MarkChatUnread
```

```text
include('material-4/Communication/MarkChatUnread')
```



| Illustration | MarkChatUnread |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/MarkChatUnread.png) | ![illustration for MarkChatUnread](../../material-4/Communication/MarkChatUnread.Local.png) |




## MarkChatUnread

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MarkChatUnread
include('material-4/Communication/MarkChatUnread')

' renders the element
MarkChatUnread('MarkChatUnread', 'Mark Chat Unread', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element MarkChatUnread
include('material-4/Communication/MarkChatUnread')

' renders the element
MarkChatUnread('MarkChatUnread', 'Mark Chat Unread', 'an optional tech label')
@enduml
```

