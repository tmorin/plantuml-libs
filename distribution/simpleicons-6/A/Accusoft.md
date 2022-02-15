# Accusoft


```text
simpleicons-6/A/Accusoft
```

```text
include('simpleicons-6/A/Accusoft')
```



| Illustration | Accusoft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Accusoft.png) | ![illustration for Accusoft](../../simpleicons-6/A/Accusoft.Local.png) |




## Accusoft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Accusoft
include('simpleicons-6/A/Accusoft')

' renders the element
Accusoft('Accusoft', 'Accusoft', 'an optional tech label')
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

' loads the Item which embeds the element Accusoft
include('simpleicons-6/A/Accusoft')

' renders the element
Accusoft('Accusoft', 'Accusoft', 'an optional tech label')
@enduml
```

