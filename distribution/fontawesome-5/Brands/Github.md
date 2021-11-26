# Github


```text
fontawesome-5/Brands/Github
```

```text
include('fontawesome-5/Brands/Github')
```



| Illustration | Github |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Github.png) | ![illustration for Github](../../fontawesome-5/Brands/Github.Local.png) |




## Github

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Github
include('fontawesome-5/Brands/Github')

' renders the element
Github('Github', 'Github', 'an optional tech label')
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

' loads the Item which embeds the element Github
include('fontawesome-5/Brands/Github')

' renders the element
Github('Github', 'Github', 'an optional tech label')
@enduml
```

