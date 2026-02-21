# PesoSign


```text
fontawesome/Solid/PesoSign
```

```text
include('fontawesome/Solid/PesoSign')
```



| Illustration | PesoSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PesoSign.png) | ![illustration for PesoSign](../../fontawesome/Solid/PesoSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PesoSignXs>`
- `<$PesoSignSm>`
- `<$PesoSignMd>`
- `<$PesoSignLg>`





## PesoSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PesoSign
include('fontawesome/Solid/PesoSign')

' renders the element
PesoSign('PesoSign', 'Peso Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PesoSign
include('fontawesome/Solid/PesoSign')

' renders the element
PesoSign('PesoSign', 'Peso Sign', 'an optional tech label', 'an optional description')
@enduml
```

