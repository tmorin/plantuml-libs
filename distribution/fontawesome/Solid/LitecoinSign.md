# LitecoinSign


```text
fontawesome/Solid/LitecoinSign
```

```text
include('fontawesome/Solid/LitecoinSign')
```



| Illustration | LitecoinSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LitecoinSign.png) | ![illustration for LitecoinSign](../../fontawesome/Solid/LitecoinSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LitecoinSignXs>`
- `<$LitecoinSignSm>`
- `<$LitecoinSignMd>`
- `<$LitecoinSignLg>`





## LitecoinSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LitecoinSign
include('fontawesome/Solid/LitecoinSign')

' renders the element
LitecoinSign('LitecoinSign', 'Litecoin Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LitecoinSign
include('fontawesome/Solid/LitecoinSign')

' renders the element
LitecoinSign('LitecoinSign', 'Litecoin Sign', 'an optional tech label', 'an optional description')
@enduml
```

