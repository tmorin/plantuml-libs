# CloudMoon


```text
fontawesome/Solid/CloudMoon
```

```text
include('fontawesome/Solid/CloudMoon')
```



| Illustration | CloudMoon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CloudMoon.png) | ![illustration for CloudMoon](../../fontawesome/Solid/CloudMoon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudMoonXs>`
- `<$CloudMoonSm>`
- `<$CloudMoonMd>`
- `<$CloudMoonLg>`





## CloudMoon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CloudMoon
include('fontawesome/Solid/CloudMoon')

' renders the element
CloudMoon('CloudMoon', 'Cloud Moon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudMoon
include('fontawesome/Solid/CloudMoon')

' renders the element
CloudMoon('CloudMoon', 'Cloud Moon', 'an optional tech label', 'an optional description')
@enduml
```

