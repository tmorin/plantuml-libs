# Cut


```text
fontawesome-5/Solid/Cut
```

```text
include('fontawesome-5/Solid/Cut')
```



| Illustration | Cut |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Cut.png) | ![illustration for Cut](../../fontawesome-5/Solid/Cut.Local.png) |




## Cut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Cut
include('fontawesome-5/Solid/Cut')

' renders the element
Cut('Cut', 'Cut', 'an optional tech label')
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

' loads the Item which embeds the element Cut
include('fontawesome-5/Solid/Cut')

' renders the element
Cut('Cut', 'Cut', 'an optional tech label')
@enduml
```

