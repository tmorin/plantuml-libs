# LariSign


```text
fontawesome-6/Solid/LariSign
```

```text
include('fontawesome-6/Solid/LariSign')
```



| Illustration | LariSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/LariSign.png) | ![illustration for LariSign](../../fontawesome-6/Solid/LariSign.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LariSign
include('fontawesome-6/Solid/LariSign')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element LariSign
include('fontawesome-6/Solid/LariSign')

' renders the element
LariSign('LariSign', 'Lari Sign', 'an optional tech label', 'an optional description')
@enduml
```

