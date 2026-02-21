# KiwiBird


```text
fontawesome/Solid/KiwiBird
```

```text
include('fontawesome/Solid/KiwiBird')
```



| Illustration | KiwiBird |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/KiwiBird.png) | ![illustration for KiwiBird](../../fontawesome/Solid/KiwiBird.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KiwiBirdXs>`
- `<$KiwiBirdSm>`
- `<$KiwiBirdMd>`
- `<$KiwiBirdLg>`





## KiwiBird

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element KiwiBird
include('fontawesome/Solid/KiwiBird')

' renders the element
KiwiBird('KiwiBird', 'Kiwi Bird', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KiwiBird
include('fontawesome/Solid/KiwiBird')

' renders the element
KiwiBird('KiwiBird', 'Kiwi Bird', 'an optional tech label', 'an optional description')
@enduml
```

