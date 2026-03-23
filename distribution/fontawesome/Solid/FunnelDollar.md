# FunnelDollar


```text
fontawesome/Solid/FunnelDollar
```

```text
include('fontawesome/Solid/FunnelDollar')
```



| Illustration | FunnelDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FunnelDollar.png) | ![illustration for FunnelDollar](../../fontawesome/Solid/FunnelDollar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FunnelDollarXs>`
- `<$FunnelDollarSm>`
- `<$FunnelDollarMd>`
- `<$FunnelDollarLg>`





## FunnelDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FunnelDollar
include('fontawesome/Solid/FunnelDollar')

' renders the element
FunnelDollar('FunnelDollar', 'Funnel Dollar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FunnelDollar
include('fontawesome/Solid/FunnelDollar')

' renders the element
FunnelDollar('FunnelDollar', 'Funnel Dollar', 'an optional tech label', 'an optional description')
@enduml
```

