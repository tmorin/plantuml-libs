# Baby


```text
fontawesome-5/Solid/Baby
```

```text
include('fontawesome-5/Solid/Baby')
```



| Illustration | Baby |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Baby.png) | ![illustration for Baby](../../fontawesome-5/Solid/Baby.Local.png) |




## Baby

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Baby
include('fontawesome-5/Solid/Baby')

' renders the element
Baby('Baby', 'Baby', 'an optional tech label')
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

' loads the Item which embeds the element Baby
include('fontawesome-5/Solid/Baby')

' renders the element
Baby('Baby', 'Baby', 'an optional tech label')
@enduml
```

