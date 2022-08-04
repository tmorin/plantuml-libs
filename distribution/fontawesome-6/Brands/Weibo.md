# Weibo


```text
fontawesome-6/Brands/Weibo
```

```text
include('fontawesome-6/Brands/Weibo')
```



| Illustration | Weibo |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Weibo.png) | ![illustration for Weibo](../../fontawesome-6/Brands/Weibo.Local.png) |




## Weibo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Weibo
include('fontawesome-6/Brands/Weibo')

' renders the element
Weibo('Weibo', 'Weibo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Weibo
include('fontawesome-6/Brands/Weibo')

' renders the element
Weibo('Weibo', 'Weibo', 'an optional tech label', 'an optional description')
@enduml
```

