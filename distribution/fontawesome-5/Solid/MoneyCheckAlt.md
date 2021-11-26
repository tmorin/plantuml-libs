# MoneyCheckAlt


```text
fontawesome-5/Solid/MoneyCheckAlt
```

```text
include('fontawesome-5/Solid/MoneyCheckAlt')
```



| Illustration | MoneyCheckAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MoneyCheckAlt.png) | ![illustration for MoneyCheckAlt](../../fontawesome-5/Solid/MoneyCheckAlt.Local.png) |




## MoneyCheckAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MoneyCheckAlt
include('fontawesome-5/Solid/MoneyCheckAlt')

' renders the element
MoneyCheckAlt('MoneyCheckAlt', 'Money Check Alt', 'an optional tech label')
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

' loads the Item which embeds the element MoneyCheckAlt
include('fontawesome-5/Solid/MoneyCheckAlt')

' renders the element
MoneyCheckAlt('MoneyCheckAlt', 'Money Check Alt', 'an optional tech label')
@enduml
```

