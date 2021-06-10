# Home


```text
fontawesome-5/Solid/Home
```

```text
include('fontawesome-5/Solid/Home')
```



| Illustration | Home |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Home.png) | ![illustration for Home](../../fontawesome-5/Solid/Home.Local.png) |




## Home

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Home
include('fontawesome-5/Solid/Home')

' renders the element
Home('Home', 'Home', 'an optional tech label')
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

' loads the Item which embeds the element Home
include('fontawesome-5/Solid/Home')

' renders the element
Home('Home', 'Home', 'an optional tech label')
@enduml
```

