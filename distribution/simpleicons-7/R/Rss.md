# Rss


```text
simpleicons-7/R/Rss
```

```text
include('simpleicons-7/R/Rss')
```



| Illustration | Rss |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Rss.png) | ![illustration for Rss](../../simpleicons-7/R/Rss.Local.png) |




## Rss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Rss
include('simpleicons-7/R/Rss')

' renders the element
Rss('Rss', 'Rss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rss
include('simpleicons-7/R/Rss')

' renders the element
Rss('Rss', 'Rss', 'an optional tech label', 'an optional description')
@enduml
```

