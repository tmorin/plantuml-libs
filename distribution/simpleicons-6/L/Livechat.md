# Livechat


```text
simpleicons-6/L/Livechat
```

```text
include('simpleicons-6/L/Livechat')
```



| Illustration | Livechat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/L/Livechat.png) | ![illustration for Livechat](../../simpleicons-6/L/Livechat.Local.png) |




## Livechat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Livechat
include('simpleicons-6/L/Livechat')

' renders the element
Livechat('Livechat', 'Livechat', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Livechat
include('simpleicons-6/L/Livechat')

' renders the element
Livechat('Livechat', 'Livechat', 'an optional tech label')
@enduml
```

