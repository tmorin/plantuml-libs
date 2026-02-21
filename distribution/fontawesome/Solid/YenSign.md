# YenSign


```text
fontawesome/Solid/YenSign
```

```text
include('fontawesome/Solid/YenSign')
```



| Illustration | YenSign |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/YenSign.png) | ![illustration for YenSign](../../fontawesome/Solid/YenSign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$YenSignXs>`
- `<$YenSignSm>`
- `<$YenSignMd>`
- `<$YenSignLg>`





## YenSign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element YenSign
include('fontawesome/Solid/YenSign')

' renders the element
YenSign('YenSign', 'Yen Sign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element YenSign
include('fontawesome/Solid/YenSign')

' renders the element
YenSign('YenSign', 'Yen Sign', 'an optional tech label', 'an optional description')
@enduml
```

