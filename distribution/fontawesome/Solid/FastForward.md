# FastForward


```text
fontawesome/Solid/FastForward
```

```text
include('fontawesome/Solid/FastForward')
```



| Illustration | FastForward |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FastForward.png) | ![illustration for FastForward](../../fontawesome/Solid/FastForward.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FastForwardXs>`
- `<$FastForwardSm>`
- `<$FastForwardMd>`
- `<$FastForwardLg>`





## FastForward

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FastForward
include('fontawesome/Solid/FastForward')

' renders the element
FastForward('FastForward', 'Fast Forward', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FastForward
include('fontawesome/Solid/FastForward')

' renders the element
FastForward('FastForward', 'Fast Forward', 'an optional tech label', 'an optional description')
@enduml
```

