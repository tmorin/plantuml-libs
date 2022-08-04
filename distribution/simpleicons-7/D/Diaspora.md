# Diaspora


```text
simpleicons-7/D/Diaspora
```

```text
include('simpleicons-7/D/Diaspora')
```



| Illustration | Diaspora |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Diaspora.png) | ![illustration for Diaspora](../../simpleicons-7/D/Diaspora.Local.png) |




## Diaspora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Diaspora
include('simpleicons-7/D/Diaspora')

' renders the element
Diaspora('Diaspora', 'Diaspora', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Diaspora
include('simpleicons-7/D/Diaspora')

' renders the element
Diaspora('Diaspora', 'Diaspora', 'an optional tech label', 'an optional description')
@enduml
```

