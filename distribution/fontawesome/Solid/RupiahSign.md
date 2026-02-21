# RupiahSign


```text
fontawesome/Solid/RupiahSign
```

```text
include('fontawesome/Solid/RupiahSign')
```



| Illustration | RupiahSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RupiahSign.png) | ![illustration for RupiahSign](../../fontawesome/Solid/RupiahSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RupiahSignXs>`
- `<$RupiahSignSm>`
- `<$RupiahSignMd>`
- `<$RupiahSignLg>`





## RupiahSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RupiahSign
include('fontawesome/Solid/RupiahSign')

' renders the element
RupiahSign('RupiahSign', 'Rupiah Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RupiahSign
include('fontawesome/Solid/RupiahSign')

' renders the element
RupiahSign('RupiahSign', 'Rupiah Sign', 'an optional tech label', 'an optional description')
@enduml
```

