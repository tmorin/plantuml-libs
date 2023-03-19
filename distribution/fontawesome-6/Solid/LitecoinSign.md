# LitecoinSign


```text
fontawesome-6/Solid/LitecoinSign
```

```text
include('fontawesome-6/Solid/LitecoinSign')
```



| Illustration | LitecoinSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LitecoinSign.png) | ![illustration for LitecoinSign](../../fontawesome-6/Solid/LitecoinSign.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LitecoinSign
include('fontawesome-6/Solid/LitecoinSign')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LitecoinSign
include('fontawesome-6/Solid/LitecoinSign')

' renders the element
LitecoinSign('LitecoinSign', 'Litecoin Sign', 'an optional tech label', 'an optional description')
@enduml
```

