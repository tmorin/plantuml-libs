# MoneyCheckDollar


```text
fontawesome-6/Solid/MoneyCheckDollar
```

```text
include('fontawesome-6/Solid/MoneyCheckDollar')
```



| Illustration | MoneyCheckDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MoneyCheckDollar.png) | ![illustration for MoneyCheckDollar](../../fontawesome-6/Solid/MoneyCheckDollar.Local.png) |




## MoneyCheckDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MoneyCheckDollar
include('fontawesome-6/Solid/MoneyCheckDollar')

' renders the element
MoneyCheckDollar('MoneyCheckDollar', 'Money Check Dollar', 'an optional tech label')
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

' loads the Item which embeds the element MoneyCheckDollar
include('fontawesome-6/Solid/MoneyCheckDollar')

' renders the element
MoneyCheckDollar('MoneyCheckDollar', 'Money Check Dollar', 'an optional tech label')
@enduml
```

