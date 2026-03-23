# Portrait


```text
fontawesome/Solid/Portrait
```

```text
include('fontawesome/Solid/Portrait')
```



| Illustration | Portrait |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Portrait.png) | ![illustration for Portrait](../../fontawesome/Solid/Portrait.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PortraitXs>`
- `<$PortraitSm>`
- `<$PortraitMd>`
- `<$PortraitLg>`





## Portrait

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Portrait
include('fontawesome/Solid/Portrait')

' renders the element
Portrait('Portrait', 'Portrait', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Portrait
include('fontawesome/Solid/Portrait')

' renders the element
Portrait('Portrait', 'Portrait', 'an optional tech label', 'an optional description')
@enduml
```

