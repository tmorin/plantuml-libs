# Discourse


```text
simpleicons-5/D/Discourse
```

```text
include('simpleicons-5/D/Discourse')
```



| Illustration | Discourse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Discourse.png) | ![illustration for Discourse](../../simpleicons-5/D/Discourse.Local.png) |




## Discourse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Discourse
include('simpleicons-5/D/Discourse')

' renders the element
Discourse('Discourse', 'Discourse', 'an optional tech label')
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

' loads the Item which embeds the element Discourse
include('simpleicons-5/D/Discourse')

' renders the element
Discourse('Discourse', 'Discourse', 'an optional tech label')
@enduml
```

