# MehRollingEyes


```text
fontawesome/Solid/MehRollingEyes
```

```text
include('fontawesome/Solid/MehRollingEyes')
```



| Illustration | MehRollingEyes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MehRollingEyes.png) | ![illustration for MehRollingEyes](../../fontawesome/Solid/MehRollingEyes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MehRollingEyesXs>`
- `<$MehRollingEyesSm>`
- `<$MehRollingEyesMd>`
- `<$MehRollingEyesLg>`





## MehRollingEyes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MehRollingEyes
include('fontawesome/Solid/MehRollingEyes')

' renders the element
MehRollingEyes('MehRollingEyes', 'Meh Rolling Eyes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MehRollingEyes
include('fontawesome/Solid/MehRollingEyes')

' renders the element
MehRollingEyes('MehRollingEyes', 'Meh Rolling Eyes', 'an optional tech label', 'an optional description')
@enduml
```

