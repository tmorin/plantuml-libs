# Diaspora


```text
fontawesome-5/Brands/Diaspora
```

```text
include('fontawesome-5/Brands/Diaspora')
```



| Illustration | Diaspora |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Diaspora.png) | ![illustration for Diaspora](../../fontawesome-5/Brands/Diaspora.Local.png) |




## Diaspora

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Diaspora
include('fontawesome-5/Brands/Diaspora')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Diaspora
include('fontawesome-5/Brands/Diaspora')

' renders the element
Diaspora('Diaspora', 'Diaspora', 'an optional tech label')
@enduml
```

