# Wordpress


```text
fontawesome-5/Brands/Wordpress
```

```text
include('fontawesome-5/Brands/Wordpress')
```



| Illustration | Wordpress |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Wordpress.png) | ![illustration for Wordpress](../../fontawesome-5/Brands/Wordpress.Local.png) |




## Wordpress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Wordpress
include('fontawesome-5/Brands/Wordpress')

' renders the element
Wordpress('Wordpress', 'Wordpress', 'an optional tech label')
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

' loads the Item which embeds the element Wordpress
include('fontawesome-5/Brands/Wordpress')

' renders the element
Wordpress('Wordpress', 'Wordpress', 'an optional tech label')
@enduml
```

