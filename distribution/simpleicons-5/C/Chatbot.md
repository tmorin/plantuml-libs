# Chatbot


```text
simpleicons-5/C/Chatbot
```

```text
include('simpleicons-5/C/Chatbot')
```



| Illustration | Chatbot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Chatbot.png) | ![illustration for Chatbot](../../simpleicons-5/C/Chatbot.Local.png) |




## Chatbot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Chatbot
include('simpleicons-5/C/Chatbot')

' renders the element
Chatbot('Chatbot', 'Chatbot', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Chatbot
include('simpleicons-5/C/Chatbot')

' renders the element
Chatbot('Chatbot', 'Chatbot', 'an optional tech label')
@enduml
```

