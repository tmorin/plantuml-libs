# ChatBubble


```text
material/Communication/ChatBubble
```

```text
include('material/Communication/ChatBubble')
```



| Illustration | ChatBubble |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/ChatBubble.png) | ![illustration for ChatBubble](../../material/Communication/ChatBubble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChatBubbleXs>`
- `<$ChatBubbleSm>`
- `<$ChatBubbleMd>`
- `<$ChatBubbleLg>`





## ChatBubble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ChatBubble
include('material/Communication/ChatBubble')

' renders the element
ChatBubble('ChatBubble', 'Chat Bubble', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChatBubble
include('material/Communication/ChatBubble')

' renders the element
ChatBubble('ChatBubble', 'Chat Bubble', 'an optional tech label', 'an optional description')
@enduml
```

