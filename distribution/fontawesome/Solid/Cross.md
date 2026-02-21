# Cross


```text
fontawesome/Solid/Cross
```

```text
include('fontawesome/Solid/Cross')
```



| Illustration | Cross |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cross.png) | ![illustration for Cross](../../fontawesome/Solid/Cross.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CrossXs>`
- `<$CrossSm>`
- `<$CrossMd>`
- `<$CrossLg>`





## Cross

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cross
include('fontawesome/Solid/Cross')

' renders the element
Cross('Cross', 'Cross', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cross
include('fontawesome/Solid/Cross')

' renders the element
Cross('Cross', 'Cross', 'an optional tech label', 'an optional description')
@enduml
```

