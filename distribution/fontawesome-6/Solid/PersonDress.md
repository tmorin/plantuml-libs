# PersonDress


```text
fontawesome-6/Solid/PersonDress
```

```text
include('fontawesome-6/Solid/PersonDress')
```



| Illustration | PersonDress |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonDress.png) | ![illustration for PersonDress](../../fontawesome-6/Solid/PersonDress.Local.png) |




## PersonDress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonDress
include('fontawesome-6/Solid/PersonDress')

' renders the element
PersonDress('PersonDress', 'Person Dress', 'an optional tech label')
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

' loads the Item which embeds the element PersonDress
include('fontawesome-6/Solid/PersonDress')

' renders the element
PersonDress('PersonDress', 'Person Dress', 'an optional tech label')
@enduml
```

