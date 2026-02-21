# LiraSign


```text
fontawesome/Solid/LiraSign
```

```text
include('fontawesome/Solid/LiraSign')
```



| Illustration | LiraSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LiraSign.png) | ![illustration for LiraSign](../../fontawesome/Solid/LiraSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LiraSignXs>`
- `<$LiraSignSm>`
- `<$LiraSignMd>`
- `<$LiraSignLg>`





## LiraSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LiraSign
include('fontawesome/Solid/LiraSign')

' renders the element
LiraSign('LiraSign', 'Lira Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LiraSign
include('fontawesome/Solid/LiraSign')

' renders the element
LiraSign('LiraSign', 'Lira Sign', 'an optional tech label', 'an optional description')
@enduml
```

