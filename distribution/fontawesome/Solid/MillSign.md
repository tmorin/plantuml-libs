# MillSign


```text
fontawesome/Solid/MillSign
```

```text
include('fontawesome/Solid/MillSign')
```



| Illustration | MillSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MillSign.png) | ![illustration for MillSign](../../fontawesome/Solid/MillSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MillSignXs>`
- `<$MillSignSm>`
- `<$MillSignMd>`
- `<$MillSignLg>`





## MillSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MillSign
include('fontawesome/Solid/MillSign')

' renders the element
MillSign('MillSign', 'Mill Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MillSign
include('fontawesome/Solid/MillSign')

' renders the element
MillSign('MillSign', 'Mill Sign', 'an optional tech label', 'an optional description')
@enduml
```

