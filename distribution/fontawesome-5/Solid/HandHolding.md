# HandHolding


```text
fontawesome-5/Solid/HandHolding
```

```text
include('fontawesome-5/Solid/HandHolding')
```



| Illustration | HandHolding |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HandHolding.png) | ![illustration for HandHolding](../../fontawesome-5/Solid/HandHolding.Local.png) |




## HandHolding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HandHolding
include('fontawesome-5/Solid/HandHolding')

' renders the element
HandHolding('HandHolding', 'Hand Holding', 'an optional tech label')
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

' loads the Item which embeds the element HandHolding
include('fontawesome-5/Solid/HandHolding')

' renders the element
HandHolding('HandHolding', 'Hand Holding', 'an optional tech label')
@enduml
```

