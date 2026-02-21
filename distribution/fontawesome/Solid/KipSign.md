# KipSign


```text
fontawesome/Solid/KipSign
```

```text
include('fontawesome/Solid/KipSign')
```



| Illustration | KipSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/KipSign.png) | ![illustration for KipSign](../../fontawesome/Solid/KipSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KipSignXs>`
- `<$KipSignSm>`
- `<$KipSignMd>`
- `<$KipSignLg>`





## KipSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KipSign
include('fontawesome/Solid/KipSign')

' renders the element
KipSign('KipSign', 'Kip Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KipSign
include('fontawesome/Solid/KipSign')

' renders the element
KipSign('KipSign', 'Kip Sign', 'an optional tech label', 'an optional description')
@enduml
```

