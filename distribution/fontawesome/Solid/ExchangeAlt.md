# ExchangeAlt


```text
fontawesome/Solid/ExchangeAlt
```

```text
include('fontawesome/Solid/ExchangeAlt')
```



| Illustration | ExchangeAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ExchangeAlt.png) | ![illustration for ExchangeAlt](../../fontawesome/Solid/ExchangeAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ExchangeAltXs>`
- `<$ExchangeAltSm>`
- `<$ExchangeAltMd>`
- `<$ExchangeAltLg>`





## ExchangeAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ExchangeAlt
include('fontawesome/Solid/ExchangeAlt')

' renders the element
ExchangeAlt('ExchangeAlt', 'Exchange Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ExchangeAlt
include('fontawesome/Solid/ExchangeAlt')

' renders the element
ExchangeAlt('ExchangeAlt', 'Exchange Alt', 'an optional tech label', 'an optional description')
@enduml
```

