# MoneyBillTrendUp


```text
fontawesome/Solid/MoneyBillTrendUp
```

```text
include('fontawesome/Solid/MoneyBillTrendUp')
```



| Illustration | MoneyBillTrendUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MoneyBillTrendUp.png) | ![illustration for MoneyBillTrendUp](../../fontawesome/Solid/MoneyBillTrendUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyBillTrendUpXs>`
- `<$MoneyBillTrendUpSm>`
- `<$MoneyBillTrendUpMd>`
- `<$MoneyBillTrendUpLg>`





## MoneyBillTrendUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyBillTrendUp
include('fontawesome/Solid/MoneyBillTrendUp')

' renders the element
MoneyBillTrendUp('MoneyBillTrendUp', 'Money Bill Trend Up', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyBillTrendUp
include('fontawesome/Solid/MoneyBillTrendUp')

' renders the element
MoneyBillTrendUp('MoneyBillTrendUp', 'Money Bill Trend Up', 'an optional tech label', 'an optional description')
@enduml
```

