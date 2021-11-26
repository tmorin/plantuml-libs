# ExchangeAlt


```text
fontawesome-5/Solid/ExchangeAlt
```

```text
include('fontawesome-5/Solid/ExchangeAlt')
```



| Illustration | ExchangeAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ExchangeAlt.png) | ![illustration for ExchangeAlt](../../fontawesome-5/Solid/ExchangeAlt.Local.png) |




## ExchangeAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ExchangeAlt
include('fontawesome-5/Solid/ExchangeAlt')

' renders the element
ExchangeAlt('ExchangeAlt', 'Exchange Alt', 'an optional tech label')
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

' loads the Item which embeds the element ExchangeAlt
include('fontawesome-5/Solid/ExchangeAlt')

' renders the element
ExchangeAlt('ExchangeAlt', 'Exchange Alt', 'an optional tech label')
@enduml
```

