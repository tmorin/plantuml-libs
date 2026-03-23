# Home


```text
fontawesome/Solid/Home
```

```text
include('fontawesome/Solid/Home')
```



| Illustration | Home |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Home.png) | ![illustration for Home](../../fontawesome/Solid/Home.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HomeXs>`
- `<$HomeSm>`
- `<$HomeMd>`
- `<$HomeLg>`





## Home

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Home
include('fontawesome/Solid/Home')

' renders the element
Home('Home', 'Home', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Home
include('fontawesome/Solid/Home')

' renders the element
Home('Home', 'Home', 'an optional tech label', 'an optional description')
@enduml
```

