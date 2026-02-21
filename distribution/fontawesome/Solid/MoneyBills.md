# MoneyBills


```text
fontawesome/Solid/MoneyBills
```

```text
include('fontawesome/Solid/MoneyBills')
```



| Illustration | MoneyBills |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MoneyBills.png) | ![illustration for MoneyBills](../../fontawesome/Solid/MoneyBills.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyBillsXs>`
- `<$MoneyBillsSm>`
- `<$MoneyBillsMd>`
- `<$MoneyBillsLg>`





## MoneyBills

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyBills
include('fontawesome/Solid/MoneyBills')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyBills
include('fontawesome/Solid/MoneyBills')

' renders the element
MoneyBills('MoneyBills', 'Money Bills', 'an optional tech label', 'an optional description')
@enduml
```

