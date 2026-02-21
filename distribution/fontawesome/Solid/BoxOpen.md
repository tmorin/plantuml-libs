# BoxOpen


```text
fontawesome/Solid/BoxOpen
```

```text
include('fontawesome/Solid/BoxOpen')
```



| Illustration | BoxOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BoxOpen.png) | ![illustration for BoxOpen](../../fontawesome/Solid/BoxOpen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BoxOpenXs>`
- `<$BoxOpenSm>`
- `<$BoxOpenMd>`
- `<$BoxOpenLg>`





## BoxOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BoxOpen
include('fontawesome/Solid/BoxOpen')

' renders the element
BoxOpen('BoxOpen', 'Box Open', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BoxOpen
include('fontawesome/Solid/BoxOpen')

' renders the element
BoxOpen('BoxOpen', 'Box Open', 'an optional tech label', 'an optional description')
@enduml
```

