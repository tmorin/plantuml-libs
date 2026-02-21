# MarkChatRead


```text
material/Communication/MarkChatRead
```

```text
include('material/Communication/MarkChatRead')
```



| Illustration | MarkChatRead |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/MarkChatRead.png) | ![illustration for MarkChatRead](../../material/Communication/MarkChatRead.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MarkChatReadXs>`
- `<$MarkChatReadSm>`
- `<$MarkChatReadMd>`
- `<$MarkChatReadLg>`





## MarkChatRead

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MarkChatRead
include('material/Communication/MarkChatRead')

' renders the element
MarkChatRead('MarkChatRead', 'Mark Chat Read', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MarkChatRead
include('material/Communication/MarkChatRead')

' renders the element
MarkChatRead('MarkChatRead', 'Mark Chat Read', 'an optional tech label', 'an optional description')
@enduml
```

