# Chatbot


```text
simpleicons-7/C/Chatbot
```

```text
include('simpleicons-7/C/Chatbot')
```



| Illustration | Chatbot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Chatbot.png) | ![illustration for Chatbot](../../simpleicons-7/C/Chatbot.Local.png) |




## Chatbot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chatbot
include('simpleicons-7/C/Chatbot')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Chatbot
include('simpleicons-7/C/Chatbot')

' renders the element
Chatbot('Chatbot', 'Chatbot', 'an optional tech label', 'an optional description')
@enduml
```

