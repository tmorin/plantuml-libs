# UnrealEngine


```text
fontawesome/Brands/UnrealEngine
```

```text
include('fontawesome/Brands/UnrealEngine')
```



| Illustration | UnrealEngine |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/UnrealEngine.png) | ![illustration for UnrealEngine](../../fontawesome/Brands/UnrealEngine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnrealEngineXs>`
- `<$UnrealEngineSm>`
- `<$UnrealEngineMd>`
- `<$UnrealEngineLg>`





## UnrealEngine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UnrealEngine
include('fontawesome/Brands/UnrealEngine')

' renders the element
UnrealEngine('UnrealEngine', 'Unreal Engine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UnrealEngine
include('fontawesome/Brands/UnrealEngine')

' renders the element
UnrealEngine('UnrealEngine', 'Unreal Engine', 'an optional tech label', 'an optional description')
@enduml
```

