# Diaspora


```text
simpleicons-5/D/Diaspora
```

```text
include('simpleicons-5/D/Diaspora')
```



| Illustration | Diaspora |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Diaspora.png) | ![illustration for Diaspora](../../simpleicons-5/D/Diaspora.Local.png) |




## Diaspora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Diaspora
include('simpleicons-5/D/Diaspora')

' renders the element
Diaspora('Diaspora', 'Diaspora', 'an optional tech label')
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

' loads the Item which embeds the element Diaspora
include('simpleicons-5/D/Diaspora')

' renders the element
Diaspora('Diaspora', 'Diaspora', 'an optional tech label')
@enduml
```

