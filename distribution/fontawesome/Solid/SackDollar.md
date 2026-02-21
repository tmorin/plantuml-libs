# SackDollar


```text
fontawesome/Solid/SackDollar
```

```text
include('fontawesome/Solid/SackDollar')
```



| Illustration | SackDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SackDollar.png) | ![illustration for SackDollar](../../fontawesome/Solid/SackDollar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SackDollarXs>`
- `<$SackDollarSm>`
- `<$SackDollarMd>`
- `<$SackDollarLg>`





## SackDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SackDollar
include('fontawesome/Solid/SackDollar')

' renders the element
SackDollar('SackDollar', 'Sack Dollar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SackDollar
include('fontawesome/Solid/SackDollar')

' renders the element
SackDollar('SackDollar', 'Sack Dollar', 'an optional tech label', 'an optional description')
@enduml
```

