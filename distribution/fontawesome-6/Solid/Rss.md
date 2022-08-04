# Rss


```text
fontawesome-6/Solid/Rss
```

```text
include('fontawesome-6/Solid/Rss')
```



| Illustration | Rss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Rss.png) | ![illustration for Rss](../../fontawesome-6/Solid/Rss.Local.png) |




## Rss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Rss
include('fontawesome-6/Solid/Rss')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Rss
include('fontawesome-6/Solid/Rss')

' renders the element
Rss('Rss', 'Rss', 'an optional tech label', 'an optional description')
@enduml
```

