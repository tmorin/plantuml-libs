# Chatbot


```text
simpleicons/C/Chatbot
```

```text
include('simpleicons/C/Chatbot')
```



| Illustration | Chatbot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Chatbot.png) | ![illustration for Chatbot](../../simpleicons/C/Chatbot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChatbotXs>`
- `<$ChatbotSm>`
- `<$ChatbotMd>`
- `<$ChatbotLg>`





## Chatbot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chatbot
include('simpleicons/C/Chatbot')

' renders the element
Chatbot('Chatbot', 'Chatbot', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Chatbot
include('simpleicons/C/Chatbot')

' renders the element
Chatbot('Chatbot', 'Chatbot', 'an optional tech label', 'an optional description')
@enduml
```

