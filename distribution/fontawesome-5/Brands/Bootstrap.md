# Bootstrap


```text
fontawesome-5/Brands/Bootstrap
```

```text
include('fontawesome-5/Brands/Bootstrap')
```



| Illustration | Bootstrap |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Bootstrap.png) | ![illustration for Bootstrap](../../fontawesome-5/Brands/Bootstrap.Local.png) |




## Bootstrap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bootstrap
include('fontawesome-5/Brands/Bootstrap')

' renders the element
Bootstrap('Bootstrap', 'Bootstrap', 'an optional tech label')
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

' loads the Item which embeds the element Bootstrap
include('fontawesome-5/Brands/Bootstrap')

' renders the element
Bootstrap('Bootstrap', 'Bootstrap', 'an optional tech label')
@enduml
```

