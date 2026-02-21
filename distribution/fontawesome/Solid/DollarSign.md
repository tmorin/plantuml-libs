# DollarSign


```text
fontawesome/Solid/DollarSign
```

```text
include('fontawesome/Solid/DollarSign')
```



| Illustration | DollarSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/DollarSign.png) | ![illustration for DollarSign](../../fontawesome/Solid/DollarSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DollarSignXs>`
- `<$DollarSignSm>`
- `<$DollarSignMd>`
- `<$DollarSignLg>`





## DollarSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element DollarSign
include('fontawesome/Solid/DollarSign')

' renders the element
DollarSign('DollarSign', 'Dollar Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DollarSign
include('fontawesome/Solid/DollarSign')

' renders the element
DollarSign('DollarSign', 'Dollar Sign', 'an optional tech label', 'an optional description')
@enduml
```

