# ArrowLeft


```text
fontawesome/Solid/ArrowLeft
```

```text
include('fontawesome/Solid/ArrowLeft')
```



| Illustration | ArrowLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowLeft.png) | ![illustration for ArrowLeft](../../fontawesome/Solid/ArrowLeft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowLeftXs>`
- `<$ArrowLeftSm>`
- `<$ArrowLeftMd>`
- `<$ArrowLeftLg>`





## ArrowLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowLeft
include('fontawesome/Solid/ArrowLeft')

' renders the element
ArrowLeft('ArrowLeft', 'Arrow Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowLeft
include('fontawesome/Solid/ArrowLeft')

' renders the element
ArrowLeft('ArrowLeft', 'Arrow Left', 'an optional tech label', 'an optional description')
@enduml
```

