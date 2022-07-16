# Ngrok


```text
simpleicons-7/N/Ngrok
```

```text
include('simpleicons-7/N/Ngrok')
```



| Illustration | Ngrok |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Ngrok.png) | ![illustration for Ngrok](../../simpleicons-7/N/Ngrok.Local.png) |




## Ngrok

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ngrok
include('simpleicons-7/N/Ngrok')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ngrok
include('simpleicons-7/N/Ngrok')

' renders the element
Ngrok('Ngrok', 'Ngrok', 'an optional tech label')
@enduml
```

