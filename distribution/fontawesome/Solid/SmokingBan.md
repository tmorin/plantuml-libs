# SmokingBan


```text
fontawesome/Solid/SmokingBan
```

```text
include('fontawesome/Solid/SmokingBan')
```



| Illustration | SmokingBan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SmokingBan.png) | ![illustration for SmokingBan](../../fontawesome/Solid/SmokingBan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmokingBanXs>`
- `<$SmokingBanSm>`
- `<$SmokingBanMd>`
- `<$SmokingBanLg>`





## SmokingBan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SmokingBan
include('fontawesome/Solid/SmokingBan')

' renders the element
SmokingBan('SmokingBan', 'Smoking Ban', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SmokingBan
include('fontawesome/Solid/SmokingBan')

' renders the element
SmokingBan('SmokingBan', 'Smoking Ban', 'an optional tech label', 'an optional description')
@enduml
```

