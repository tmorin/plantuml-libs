# Youtube


```text
fontawesome-5/Brands/Youtube
```

```text
include('fontawesome-5/Brands/Youtube')
```



| Illustration | Youtube |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Youtube.png) | ![illustration for Youtube](../../fontawesome-5/Brands/Youtube.Local.png) |




## Youtube

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Youtube
include('fontawesome-5/Brands/Youtube')

' renders the element
Youtube('Youtube', 'Youtube', 'an optional tech label')
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

' loads the Item which embeds the element Youtube
include('fontawesome-5/Brands/Youtube')

' renders the element
Youtube('Youtube', 'Youtube', 'an optional tech label')
@enduml
```

