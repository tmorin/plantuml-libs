# StarAndCrescent


```text
fontawesome-5/Solid/StarAndCrescent
```

```text
include('fontawesome-5/Solid/StarAndCrescent')
```



| Illustration | StarAndCrescent |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/StarAndCrescent.png) | ![illustration for StarAndCrescent](../../fontawesome-5/Solid/StarAndCrescent.Local.png) |




## StarAndCrescent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element StarAndCrescent
include('fontawesome-5/Solid/StarAndCrescent')

' renders the element
StarAndCrescent('StarAndCrescent', 'Star And Crescent', 'an optional tech label')
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

' loads the Item which embeds the element StarAndCrescent
include('fontawesome-5/Solid/StarAndCrescent')

' renders the element
StarAndCrescent('StarAndCrescent', 'Star And Crescent', 'an optional tech label')
@enduml
```

