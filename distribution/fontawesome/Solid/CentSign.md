# CentSign


```text
fontawesome/Solid/CentSign
```

```text
include('fontawesome/Solid/CentSign')
```



| Illustration | CentSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CentSign.png) | ![illustration for CentSign](../../fontawesome/Solid/CentSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CentSignXs>`
- `<$CentSignSm>`
- `<$CentSignMd>`
- `<$CentSignLg>`





## CentSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CentSign
include('fontawesome/Solid/CentSign')

' renders the element
CentSign('CentSign', 'Cent Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CentSign
include('fontawesome/Solid/CentSign')

' renders the element
CentSign('CentSign', 'Cent Sign', 'an optional tech label', 'an optional description')
@enduml
```

