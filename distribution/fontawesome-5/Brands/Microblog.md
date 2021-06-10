# Microblog


```text
fontawesome-5/Brands/Microblog
```

```text
include('fontawesome-5/Brands/Microblog')
```



| Illustration | Microblog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Microblog.png) | ![illustration for Microblog](../../fontawesome-5/Brands/Microblog.Local.png) |




## Microblog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Microblog
include('fontawesome-5/Brands/Microblog')

' renders the element
Microblog('Microblog', 'Microblog', 'an optional tech label')
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

' loads the Item which embeds the element Microblog
include('fontawesome-5/Brands/Microblog')

' renders the element
Microblog('Microblog', 'Microblog', 'an optional tech label')
@enduml
```

