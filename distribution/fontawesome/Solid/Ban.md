# Ban


```text
fontawesome/Solid/Ban
```

```text
include('fontawesome/Solid/Ban')
```



| Illustration | Ban |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Ban.png) | ![illustration for Ban](../../fontawesome/Solid/Ban.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BanXs>`
- `<$BanSm>`
- `<$BanMd>`
- `<$BanLg>`





## Ban

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Ban
include('fontawesome/Solid/Ban')

' renders the element
Ban('Ban', 'Ban', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ban
include('fontawesome/Solid/Ban')

' renders the element
Ban('Ban', 'Ban', 'an optional tech label', 'an optional description')
@enduml
```

