# CloudShowersWater


```text
fontawesome-6/Solid/CloudShowersWater
```

```text
include('fontawesome-6/Solid/CloudShowersWater')
```



| Illustration | CloudShowersWater |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CloudShowersWater.png) | ![illustration for CloudShowersWater](../../fontawesome-6/Solid/CloudShowersWater.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudShowersWaterXs>`
- `<$CloudShowersWaterSm>`
- `<$CloudShowersWaterMd>`
- `<$CloudShowersWaterLg>`





## CloudShowersWater

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CloudShowersWater
include('fontawesome-6/Solid/CloudShowersWater')

' renders the element
CloudShowersWater('CloudShowersWater', 'Cloud Showers Water', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudShowersWater
include('fontawesome-6/Solid/CloudShowersWater')

' renders the element
CloudShowersWater('CloudShowersWater', 'Cloud Showers Water', 'an optional tech label', 'an optional description')
@enduml
```

