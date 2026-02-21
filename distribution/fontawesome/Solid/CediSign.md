# CediSign


```text
fontawesome/Solid/CediSign
```

```text
include('fontawesome/Solid/CediSign')
```



| Illustration | CediSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CediSign.png) | ![illustration for CediSign](../../fontawesome/Solid/CediSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CediSignXs>`
- `<$CediSignSm>`
- `<$CediSignMd>`
- `<$CediSignLg>`





## CediSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CediSign
include('fontawesome/Solid/CediSign')

' renders the element
CediSign('CediSign', 'Cedi Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CediSign
include('fontawesome/Solid/CediSign')

' renders the element
CediSign('CediSign', 'Cedi Sign', 'an optional tech label', 'an optional description')
@enduml
```

