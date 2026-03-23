# PoundSign


```text
fontawesome/Solid/PoundSign
```

```text
include('fontawesome/Solid/PoundSign')
```



| Illustration | PoundSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PoundSign.png) | ![illustration for PoundSign](../../fontawesome/Solid/PoundSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PoundSignXs>`
- `<$PoundSignSm>`
- `<$PoundSignMd>`
- `<$PoundSignLg>`





## PoundSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PoundSign
include('fontawesome/Solid/PoundSign')

' renders the element
PoundSign('PoundSign', 'Pound Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PoundSign
include('fontawesome/Solid/PoundSign')

' renders the element
PoundSign('PoundSign', 'Pound Sign', 'an optional tech label', 'an optional description')
@enduml
```

