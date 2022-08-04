# MoneyBills


```text
fontawesome-6/Solid/MoneyBills
```

```text
include('fontawesome-6/Solid/MoneyBills')
```



| Illustration | MoneyBills |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MoneyBills.png) | ![illustration for MoneyBills](../../fontawesome-6/Solid/MoneyBills.Local.png) |




## MoneyBills

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyBills
include('fontawesome-6/Solid/MoneyBills')

' renders the element
MoneyBills('MoneyBills', 'Money Bills', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyBills
include('fontawesome-6/Solid/MoneyBills')

' renders the element
MoneyBills('MoneyBills', 'Money Bills', 'an optional tech label', 'an optional description')
@enduml
```

