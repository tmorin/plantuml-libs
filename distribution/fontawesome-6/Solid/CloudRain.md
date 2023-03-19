# CloudRain


```text
fontawesome-6/Solid/CloudRain
```

```text
include('fontawesome-6/Solid/CloudRain')
```



| Illustration | CloudRain |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CloudRain.png) | ![illustration for CloudRain](../../fontawesome-6/Solid/CloudRain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudRainXs>`
- `<$CloudRainSm>`
- `<$CloudRainMd>`
- `<$CloudRainLg>`





## CloudRain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudRain
include('fontawesome-6/Solid/CloudRain')

' renders the element
CloudRain('CloudRain', 'Cloud Rain', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudRain
include('fontawesome-6/Solid/CloudRain')

' renders the element
CloudRain('CloudRain', 'Cloud Rain', 'an optional tech label', 'an optional description')
@enduml
```

