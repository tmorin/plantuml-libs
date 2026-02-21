# CloudMoonRain


```text
fontawesome/Solid/CloudMoonRain
```

```text
include('fontawesome/Solid/CloudMoonRain')
```



| Illustration | CloudMoonRain |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CloudMoonRain.png) | ![illustration for CloudMoonRain](../../fontawesome/Solid/CloudMoonRain.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudMoonRainXs>`
- `<$CloudMoonRainSm>`
- `<$CloudMoonRainMd>`
- `<$CloudMoonRainLg>`





## CloudMoonRain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudMoonRain
include('fontawesome/Solid/CloudMoonRain')

' renders the element
CloudMoonRain('CloudMoonRain', 'Cloud Moon Rain', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudMoonRain
include('fontawesome/Solid/CloudMoonRain')

' renders the element
CloudMoonRain('CloudMoonRain', 'Cloud Moon Rain', 'an optional tech label', 'an optional description')
@enduml
```

