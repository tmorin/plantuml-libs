# CloudSun


```text
fontawesome-6/Solid/CloudSun
```

```text
include('fontawesome-6/Solid/CloudSun')
```



| Illustration | CloudSun |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CloudSun.png) | ![illustration for CloudSun](../../fontawesome-6/Solid/CloudSun.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudSunXs>`
- `<$CloudSunSm>`
- `<$CloudSunMd>`
- `<$CloudSunLg>`





## CloudSun

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudSun
include('fontawesome-6/Solid/CloudSun')

' renders the element
CloudSun('CloudSun', 'Cloud Sun', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudSun
include('fontawesome-6/Solid/CloudSun')

' renders the element
CloudSun('CloudSun', 'Cloud Sun', 'an optional tech label', 'an optional description')
@enduml
```

