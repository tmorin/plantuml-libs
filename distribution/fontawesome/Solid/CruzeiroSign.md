# CruzeiroSign


```text
fontawesome/Solid/CruzeiroSign
```

```text
include('fontawesome/Solid/CruzeiroSign')
```



| Illustration | CruzeiroSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CruzeiroSign.png) | ![illustration for CruzeiroSign](../../fontawesome/Solid/CruzeiroSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CruzeiroSignXs>`
- `<$CruzeiroSignSm>`
- `<$CruzeiroSignMd>`
- `<$CruzeiroSignLg>`





## CruzeiroSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CruzeiroSign
include('fontawesome/Solid/CruzeiroSign')

' renders the element
CruzeiroSign('CruzeiroSign', 'Cruzeiro Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CruzeiroSign
include('fontawesome/Solid/CruzeiroSign')

' renders the element
CruzeiroSign('CruzeiroSign', 'Cruzeiro Sign', 'an optional tech label', 'an optional description')
@enduml
```

