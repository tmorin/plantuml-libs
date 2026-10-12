# RobloxCreatorStudio


```text
fontawesome/Brands/RobloxCreatorStudio
```

```text
include('fontawesome/Brands/RobloxCreatorStudio')
```



| Illustration | RobloxCreatorStudio |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/RobloxCreatorStudio.png) | ![illustration for RobloxCreatorStudio](../../fontawesome/Brands/RobloxCreatorStudio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RobloxCreatorStudioXs>`
- `<$RobloxCreatorStudioSm>`
- `<$RobloxCreatorStudioMd>`
- `<$RobloxCreatorStudioLg>`





## RobloxCreatorStudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RobloxCreatorStudio
include('fontawesome/Brands/RobloxCreatorStudio')

' renders the element
RobloxCreatorStudio('RobloxCreatorStudio', 'Roblox Creator Studio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RobloxCreatorStudio
include('fontawesome/Brands/RobloxCreatorStudio')

' renders the element
RobloxCreatorStudio('RobloxCreatorStudio', 'Roblox Creator Studio', 'an optional tech label', 'an optional description')
@enduml
```

