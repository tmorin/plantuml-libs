# Blogger


```text
fontawesome-6/Brands/Blogger
```

```text
include('fontawesome-6/Brands/Blogger')
```



| Illustration | Blogger |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Blogger.png) | ![illustration for Blogger](../../fontawesome-6/Brands/Blogger.Local.png) |




## Blogger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Blogger
include('fontawesome-6/Brands/Blogger')

' renders the element
Blogger('Blogger', 'Blogger', 'an optional tech label')
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

' loads the Item which embeds the element Blogger
include('fontawesome-6/Brands/Blogger')

' renders the element
Blogger('Blogger', 'Blogger', 'an optional tech label')
@enduml
```

