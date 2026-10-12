# ObsStudio


```text
fontawesome/Brands/ObsStudio
```

```text
include('fontawesome/Brands/ObsStudio')
```



| Illustration | ObsStudio |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/ObsStudio.png) | ![illustration for ObsStudio](../../fontawesome/Brands/ObsStudio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ObsStudioXs>`
- `<$ObsStudioSm>`
- `<$ObsStudioMd>`
- `<$ObsStudioLg>`





## ObsStudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ObsStudio
include('fontawesome/Brands/ObsStudio')

' renders the element
ObsStudio('ObsStudio', 'Obs Studio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ObsStudio
include('fontawesome/Brands/ObsStudio')

' renders the element
ObsStudio('ObsStudio', 'Obs Studio', 'an optional tech label', 'an optional description')
@enduml
```

