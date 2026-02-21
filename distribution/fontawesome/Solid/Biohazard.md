# Biohazard


```text
fontawesome/Solid/Biohazard
```

```text
include('fontawesome/Solid/Biohazard')
```



| Illustration | Biohazard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Biohazard.png) | ![illustration for Biohazard](../../fontawesome/Solid/Biohazard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BiohazardXs>`
- `<$BiohazardSm>`
- `<$BiohazardMd>`
- `<$BiohazardLg>`





## Biohazard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Biohazard
include('fontawesome/Solid/Biohazard')

' renders the element
Biohazard('Biohazard', 'Biohazard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Biohazard
include('fontawesome/Solid/Biohazard')

' renders the element
Biohazard('Biohazard', 'Biohazard', 'an optional tech label', 'an optional description')
@enduml
```

