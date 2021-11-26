# Auth0


```text
simpleicons-5/A/Auth0
```

```text
include('simpleicons-5/A/Auth0')
```



| Illustration | Auth0 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Auth0.png) | ![illustration for Auth0](../../simpleicons-5/A/Auth0.Local.png) |




## Auth0

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Auth0
include('simpleicons-5/A/Auth0')

' renders the element
Auth0('Auth0', 'Auth0', 'an optional tech label')
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

' loads the Item which embeds the element Auth0
include('simpleicons-5/A/Auth0')

' renders the element
Auth0('Auth0', 'Auth0', 'an optional tech label')
@enduml
```

