# Tumblr


```text
fontawesome-5/Brands/Tumblr
```

```text
include('fontawesome-5/Brands/Tumblr')
```



| Illustration | Tumblr |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Tumblr.png) | ![illustration for Tumblr](../../fontawesome-5/Brands/Tumblr.Local.png) |




## Tumblr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tumblr
include('fontawesome-5/Brands/Tumblr')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Tumblr
include('fontawesome-5/Brands/Tumblr')

' renders the element
Tumblr('Tumblr', 'Tumblr', 'an optional tech label')
@enduml
```

