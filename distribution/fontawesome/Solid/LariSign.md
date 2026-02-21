# LariSign


```text
fontawesome/Solid/LariSign
```

```text
include('fontawesome/Solid/LariSign')
```



| Illustration | LariSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/LariSign.png) | ![illustration for LariSign](../../fontawesome/Solid/LariSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LariSignXs>`
- `<$LariSignSm>`
- `<$LariSignMd>`
- `<$LariSignLg>`





## LariSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element LariSign
include('fontawesome/Solid/LariSign')

' renders the element
LariSign('LariSign', 'Lari Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LariSign
include('fontawesome/Solid/LariSign')

' renders the element
LariSign('LariSign', 'Lari Sign', 'an optional tech label', 'an optional description')
@enduml
```

