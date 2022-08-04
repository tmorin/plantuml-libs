# HandHoldingDollar


```text
fontawesome-6/Solid/HandHoldingDollar
```

```text
include('fontawesome-6/Solid/HandHoldingDollar')
```



| Illustration | HandHoldingDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandHoldingDollar.png) | ![illustration for HandHoldingDollar](../../fontawesome-6/Solid/HandHoldingDollar.Local.png) |




## HandHoldingDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandHoldingDollar
include('fontawesome-6/Solid/HandHoldingDollar')

' renders the element
HandHoldingDollar('HandHoldingDollar', 'Hand Holding Dollar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandHoldingDollar
include('fontawesome-6/Solid/HandHoldingDollar')

' renders the element
HandHoldingDollar('HandHoldingDollar', 'Hand Holding Dollar', 'an optional tech label', 'an optional description')
@enduml
```

