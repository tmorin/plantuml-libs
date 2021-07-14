# ChatBubble


```text
material-4/Communication/ChatBubble
```

```text
include('material-4/Communication/ChatBubble')
```



| Illustration | ChatBubble |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/ChatBubble.png) | ![illustration for ChatBubble](../../material-4/Communication/ChatBubble.Local.png) |




## ChatBubble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ChatBubble
include('material-4/Communication/ChatBubble')

' renders the element
ChatBubble('ChatBubble', 'Chat Bubble', 'an optional tech label')
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

' loads the Item which embeds the element ChatBubble
include('material-4/Communication/ChatBubble')

' renders the element
ChatBubble('ChatBubble', 'Chat Bubble', 'an optional tech label')
@enduml
```

