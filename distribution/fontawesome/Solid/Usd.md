# Usd


```text
fontawesome/Solid/Usd
```

```text
include('fontawesome/Solid/Usd')
```



| Illustration | Usd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Usd.png) | ![illustration for Usd](../../fontawesome/Solid/Usd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsdXs>`
- `<$UsdSm>`
- `<$UsdMd>`
- `<$UsdLg>`





## Usd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Usd
include('fontawesome/Solid/Usd')

' renders the element
Usd('Usd', 'Usd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Usd
include('fontawesome/Solid/Usd')

' renders the element
Usd('Usd', 'Usd', 'an optional tech label', 'an optional description')
@enduml
```

