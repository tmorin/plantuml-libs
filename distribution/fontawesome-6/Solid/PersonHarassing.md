# PersonHarassing


```text
fontawesome-6/Solid/PersonHarassing
```

```text
include('fontawesome-6/Solid/PersonHarassing')
```



| Illustration | PersonHarassing |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonHarassing.png) | ![illustration for PersonHarassing](../../fontawesome-6/Solid/PersonHarassing.Local.png) |




## PersonHarassing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonHarassing
include('fontawesome-6/Solid/PersonHarassing')

' renders the element
PersonHarassing('PersonHarassing', 'Person Harassing', 'an optional tech label')
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

' loads the Item which embeds the element PersonHarassing
include('fontawesome-6/Solid/PersonHarassing')

' renders the element
PersonHarassing('PersonHarassing', 'Person Harassing', 'an optional tech label')
@enduml
```

