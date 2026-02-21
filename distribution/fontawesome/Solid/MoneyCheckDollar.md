# MoneyCheckDollar


```text
fontawesome/Solid/MoneyCheckDollar
```

```text
include('fontawesome/Solid/MoneyCheckDollar')
```



| Illustration | MoneyCheckDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MoneyCheckDollar.png) | ![illustration for MoneyCheckDollar](../../fontawesome/Solid/MoneyCheckDollar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MoneyCheckDollarXs>`
- `<$MoneyCheckDollarSm>`
- `<$MoneyCheckDollarMd>`
- `<$MoneyCheckDollarLg>`





## MoneyCheckDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MoneyCheckDollar
include('fontawesome/Solid/MoneyCheckDollar')

' renders the element
MoneyCheckDollar('MoneyCheckDollar', 'Money Check Dollar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MoneyCheckDollar
include('fontawesome/Solid/MoneyCheckDollar')

' renders the element
MoneyCheckDollar('MoneyCheckDollar', 'Money Check Dollar', 'an optional tech label', 'an optional description')
@enduml
```

