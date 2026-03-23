# SheqelSign


```text
fontawesome/Solid/SheqelSign
```

```text
include('fontawesome/Solid/SheqelSign')
```



| Illustration | SheqelSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SheqelSign.png) | ![illustration for SheqelSign](../../fontawesome/Solid/SheqelSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SheqelSignXs>`
- `<$SheqelSignSm>`
- `<$SheqelSignMd>`
- `<$SheqelSignLg>`





## SheqelSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SheqelSign
include('fontawesome/Solid/SheqelSign')

' renders the element
SheqelSign('SheqelSign', 'Sheqel Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SheqelSign
include('fontawesome/Solid/SheqelSign')

' renders the element
SheqelSign('SheqelSign', 'Sheqel Sign', 'an optional tech label', 'an optional description')
@enduml
```

