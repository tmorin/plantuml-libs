# PersonSnowboarding


```text
fontawesome/Solid/PersonSnowboarding
```

```text
include('fontawesome/Solid/PersonSnowboarding')
```



| Illustration | PersonSnowboarding |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonSnowboarding.png) | ![illustration for PersonSnowboarding](../../fontawesome/Solid/PersonSnowboarding.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonSnowboardingXs>`
- `<$PersonSnowboardingSm>`
- `<$PersonSnowboardingMd>`
- `<$PersonSnowboardingLg>`





## PersonSnowboarding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonSnowboarding
include('fontawesome/Solid/PersonSnowboarding')

' renders the element
PersonSnowboarding('PersonSnowboarding', 'Person Snowboarding', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonSnowboarding
include('fontawesome/Solid/PersonSnowboarding')

' renders the element
PersonSnowboarding('PersonSnowboarding', 'Person Snowboarding', 'an optional tech label', 'an optional description')
@enduml
```

