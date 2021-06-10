# HandScissors


```text
fontawesome-5/Solid/HandScissors
```

```text
include('fontawesome-5/Solid/HandScissors')
```



| Illustration | HandScissors |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandScissors.png) | ![illustration for HandScissors](../../fontawesome-5/Solid/HandScissors.Local.png) |




## HandScissors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandScissors
include('fontawesome-5/Solid/HandScissors')

' renders the element
HandScissors('HandScissors', 'Hand Scissors', 'an optional tech label')
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

' loads the Item which embeds the element HandScissors
include('fontawesome-5/Solid/HandScissors')

' renders the element
HandScissors('HandScissors', 'Hand Scissors', 'an optional tech label')
@enduml
```

