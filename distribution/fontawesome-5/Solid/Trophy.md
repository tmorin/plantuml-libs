# Trophy


```text
fontawesome-5/Solid/Trophy
```

```text
include('fontawesome-5/Solid/Trophy')
```



| Illustration | Trophy |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Trophy.png) | ![illustration for Trophy](../../fontawesome-5/Solid/Trophy.Local.png) |




## Trophy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Trophy
include('fontawesome-5/Solid/Trophy')

' renders the element
Trophy('Trophy', 'Trophy', 'an optional tech label')
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

' loads the Item which embeds the element Trophy
include('fontawesome-5/Solid/Trophy')

' renders the element
Trophy('Trophy', 'Trophy', 'an optional tech label')
@enduml
```

