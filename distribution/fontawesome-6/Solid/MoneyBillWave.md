# MoneyBillWave


```text
fontawesome-6/Solid/MoneyBillWave
```

```text
include('fontawesome-6/Solid/MoneyBillWave')
```



| Illustration | MoneyBillWave |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MoneyBillWave.png) | ![illustration for MoneyBillWave](../../fontawesome-6/Solid/MoneyBillWave.Local.png) |




## MoneyBillWave

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyBillWave
include('fontawesome-6/Solid/MoneyBillWave')

' renders the element
MoneyBillWave('MoneyBillWave', 'Money Bill Wave', 'an optional tech label')
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

' loads the Item which embeds the element MoneyBillWave
include('fontawesome-6/Solid/MoneyBillWave')

' renders the element
MoneyBillWave('MoneyBillWave', 'Money Bill Wave', 'an optional tech label')
@enduml
```

