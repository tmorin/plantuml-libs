# F


```text
fontawesome/Solid/F
```

```text
include('fontawesome/Solid/F')
```



| Illustration | F |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/F.png) | ![illustration for F](../../fontawesome/Solid/F.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FXs>`
- `<$FSm>`
- `<$FMd>`
- `<$FLg>`





## F

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element F
include('fontawesome/Solid/F')

' renders the element
F('F', 'F', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element F
include('fontawesome/Solid/F')

' renders the element
F('F', 'F', 'an optional tech label', 'an optional description')
@enduml
```

