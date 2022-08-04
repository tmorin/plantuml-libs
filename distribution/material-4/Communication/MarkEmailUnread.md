# MarkEmailUnread


```text
material-4/Communication/MarkEmailUnread
```

```text
include('material-4/Communication/MarkEmailUnread')
```



| Illustration | MarkEmailUnread |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/MarkEmailUnread.png) | ![illustration for MarkEmailUnread](../../material-4/Communication/MarkEmailUnread.Local.png) |




## MarkEmailUnread

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MarkEmailUnread
include('material-4/Communication/MarkEmailUnread')

' renders the element
MarkEmailUnread('MarkEmailUnread', 'Mark Email Unread', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MarkEmailUnread
include('material-4/Communication/MarkEmailUnread')

' renders the element
MarkEmailUnread('MarkEmailUnread', 'Mark Email Unread', 'an optional tech label', 'an optional description')
@enduml
```

