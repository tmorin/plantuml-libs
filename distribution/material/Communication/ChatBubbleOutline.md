# ChatBubbleOutline


```text
material/Communication/ChatBubbleOutline
```

```text
include('material/Communication/ChatBubbleOutline')
```



| Illustration | ChatBubbleOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/ChatBubbleOutline.png) | ![illustration for ChatBubbleOutline](../../material/Communication/ChatBubbleOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChatBubbleOutlineXs>`
- `<$ChatBubbleOutlineSm>`
- `<$ChatBubbleOutlineMd>`
- `<$ChatBubbleOutlineLg>`





## ChatBubbleOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ChatBubbleOutline
include('material/Communication/ChatBubbleOutline')

' renders the element
ChatBubbleOutline('ChatBubbleOutline', 'Chat Bubble Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChatBubbleOutline
include('material/Communication/ChatBubbleOutline')

' renders the element
ChatBubbleOutline('ChatBubbleOutline', 'Chat Bubble Outline', 'an optional tech label', 'an optional description')
@enduml
```

