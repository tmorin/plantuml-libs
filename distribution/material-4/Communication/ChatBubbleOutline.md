# ChatBubbleOutline


```text
material-4/Communication/ChatBubbleOutline
```

```text
include('material-4/Communication/ChatBubbleOutline')
```



| Illustration | ChatBubbleOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/ChatBubbleOutline.png) | ![illustration for ChatBubbleOutline](../../material-4/Communication/ChatBubbleOutline.Local.png) |




## ChatBubbleOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ChatBubbleOutline
include('material-4/Communication/ChatBubbleOutline')

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
include('material-4/bootstrap')

' loads the Item which embeds the element ChatBubbleOutline
include('material-4/Communication/ChatBubbleOutline')

' renders the element
ChatBubbleOutline('ChatBubbleOutline', 'Chat Bubble Outline', 'an optional tech label', 'an optional description')
@enduml
```

