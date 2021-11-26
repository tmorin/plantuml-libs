# MoneyBill


```text
fontawesome-5/Solid/MoneyBill
```

```text
include('fontawesome-5/Solid/MoneyBill')
```



| Illustration | MoneyBill |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MoneyBill.png) | ![illustration for MoneyBill](../../fontawesome-5/Solid/MoneyBill.Local.png) |




## MoneyBill

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MoneyBill
include('fontawesome-5/Solid/MoneyBill')

' renders the element
MoneyBill('MoneyBill', 'Money Bill', 'an optional tech label')
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

' loads the Item which embeds the element MoneyBill
include('fontawesome-5/Solid/MoneyBill')

' renders the element
MoneyBill('MoneyBill', 'Money Bill', 'an optional tech label')
@enduml
```

