# Pentagon


```text
fontawesome/Solid/Pentagon
```

```text
include('fontawesome/Solid/Pentagon')
```



| Illustration | Pentagon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Pentagon.png) | ![illustration for Pentagon](../../fontawesome/Solid/Pentagon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PentagonXs>`
- `<$PentagonSm>`
- `<$PentagonMd>`
- `<$PentagonLg>`





## Pentagon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Pentagon
include('fontawesome/Solid/Pentagon')

' renders the element
Pentagon('Pentagon', 'Pentagon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pentagon
include('fontawesome/Solid/Pentagon')

' renders the element
Pentagon('Pentagon', 'Pentagon', 'an optional tech label', 'an optional description')
@enduml
```

