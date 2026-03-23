# Digging


```text
fontawesome/Solid/Digging
```

```text
include('fontawesome/Solid/Digging')
```



| Illustration | Digging |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Digging.png) | ![illustration for Digging](../../fontawesome/Solid/Digging.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DiggingXs>`
- `<$DiggingSm>`
- `<$DiggingMd>`
- `<$DiggingLg>`





## Digging

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Digging
include('fontawesome/Solid/Digging')

' renders the element
Digging('Digging', 'Digging', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Digging
include('fontawesome/Solid/Digging')

' renders the element
Digging('Digging', 'Digging', 'an optional tech label', 'an optional description')
@enduml
```

