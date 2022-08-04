# PersonHalfDress


```text
fontawesome-6/Solid/PersonHalfDress
```

```text
include('fontawesome-6/Solid/PersonHalfDress')
```



| Illustration | PersonHalfDress |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonHalfDress.png) | ![illustration for PersonHalfDress](../../fontawesome-6/Solid/PersonHalfDress.Local.png) |




## PersonHalfDress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonHalfDress
include('fontawesome-6/Solid/PersonHalfDress')

' renders the element
PersonHalfDress('PersonHalfDress', 'Person Half Dress', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonHalfDress
include('fontawesome-6/Solid/PersonHalfDress')

' renders the element
PersonHalfDress('PersonHalfDress', 'Person Half Dress', 'an optional tech label', 'an optional description')
@enduml
```

