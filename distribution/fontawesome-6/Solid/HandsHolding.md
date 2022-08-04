# HandsHolding


```text
fontawesome-6/Solid/HandsHolding
```

```text
include('fontawesome-6/Solid/HandsHolding')
```



| Illustration | HandsHolding |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandsHolding.png) | ![illustration for HandsHolding](../../fontawesome-6/Solid/HandsHolding.Local.png) |




## HandsHolding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandsHolding
include('fontawesome-6/Solid/HandsHolding')

' renders the element
HandsHolding('HandsHolding', 'Hands Holding', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsHolding
include('fontawesome-6/Solid/HandsHolding')

' renders the element
HandsHolding('HandsHolding', 'Hands Holding', 'an optional tech label', 'an optional description')
@enduml
```

