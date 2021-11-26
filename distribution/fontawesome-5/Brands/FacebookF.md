# FacebookF


```text
fontawesome-5/Brands/FacebookF
```

```text
include('fontawesome-5/Brands/FacebookF')
```



| Illustration | FacebookF |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/FacebookF.png) | ![illustration for FacebookF](../../fontawesome-5/Brands/FacebookF.Local.png) |




## FacebookF

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FacebookF
include('fontawesome-5/Brands/FacebookF')

' renders the element
FacebookF('FacebookF', 'Facebook F', 'an optional tech label')
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

' loads the Item which embeds the element FacebookF
include('fontawesome-5/Brands/FacebookF')

' renders the element
FacebookF('FacebookF', 'Facebook F', 'an optional tech label')
@enduml
```

