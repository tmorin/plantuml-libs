# Tumblr


```text
simpleicons-5/T/Tumblr
```

```text
include('simpleicons-5/T/Tumblr')
```



| Illustration | Tumblr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Tumblr.png) | ![illustration for Tumblr](../../simpleicons-5/T/Tumblr.Local.png) |




## Tumblr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Tumblr
include('simpleicons-5/T/Tumblr')

' renders the element
Tumblr('Tumblr', 'Tumblr', 'an optional tech label')
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

' loads the Item which embeds the element Tumblr
include('simpleicons-5/T/Tumblr')

' renders the element
Tumblr('Tumblr', 'Tumblr', 'an optional tech label')
@enduml
```

