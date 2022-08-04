# Pinterest


```text
fontawesome-6/Brands/Pinterest
```

```text
include('fontawesome-6/Brands/Pinterest')
```



| Illustration | Pinterest |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Pinterest.png) | ![illustration for Pinterest](../../fontawesome-6/Brands/Pinterest.Local.png) |




## Pinterest

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Pinterest
include('fontawesome-6/Brands/Pinterest')

' renders the element
Pinterest('Pinterest', 'Pinterest', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pinterest
include('fontawesome-6/Brands/Pinterest')

' renders the element
Pinterest('Pinterest', 'Pinterest', 'an optional tech label', 'an optional description')
@enduml
```

