# Ngrok


```text
simpleicons-5/N/Ngrok
```

```text
include('simpleicons-5/N/Ngrok')
```



| Illustration | Ngrok |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Ngrok.png) | ![illustration for Ngrok](../../simpleicons-5/N/Ngrok.Local.png) |




## Ngrok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ngrok
include('simpleicons-5/N/Ngrok')

' renders the element
Ngrok('Ngrok', 'Ngrok', 'an optional tech label')
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

' loads the Item which embeds the element Ngrok
include('simpleicons-5/N/Ngrok')

' renders the element
Ngrok('Ngrok', 'Ngrok', 'an optional tech label')
@enduml
```

