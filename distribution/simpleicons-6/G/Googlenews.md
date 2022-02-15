# Googlenews


```text
simpleicons-6/G/Googlenews
```

```text
include('simpleicons-6/G/Googlenews')
```



| Illustration | Googlenews |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/G/Googlenews.png) | ![illustration for Googlenews](../../simpleicons-6/G/Googlenews.Local.png) |




## Googlenews

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Googlenews
include('simpleicons-6/G/Googlenews')

' renders the element
Googlenews('Googlenews', 'Googlenews', 'an optional tech label')
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

' loads the Item which embeds the element Googlenews
include('simpleicons-6/G/Googlenews')

' renders the element
Googlenews('Googlenews', 'Googlenews', 'an optional tech label')
@enduml
```

