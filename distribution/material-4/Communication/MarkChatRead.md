# MarkChatRead


```text
material-4/Communication/MarkChatRead
```

```text
include('material-4/Communication/MarkChatRead')
```



| Illustration | MarkChatRead |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/MarkChatRead.png) | ![illustration for MarkChatRead](../../material-4/Communication/MarkChatRead.Local.png) |




## MarkChatRead

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MarkChatRead
include('material-4/Communication/MarkChatRead')

' renders the element
MarkChatRead('MarkChatRead', 'Mark Chat Read', 'an optional tech label')
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

' loads the Item which embeds the element MarkChatRead
include('material-4/Communication/MarkChatRead')

' renders the element
MarkChatRead('MarkChatRead', 'Mark Chat Read', 'an optional tech label')
@enduml
```

