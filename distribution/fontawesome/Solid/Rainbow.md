# Rainbow


```text
fontawesome/Solid/Rainbow
```

```text
include('fontawesome/Solid/Rainbow')
```



| Illustration | Rainbow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Rainbow.png) | ![illustration for Rainbow](../../fontawesome/Solid/Rainbow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RainbowXs>`
- `<$RainbowSm>`
- `<$RainbowMd>`
- `<$RainbowLg>`





## Rainbow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Rainbow
include('fontawesome/Solid/Rainbow')

' renders the element
Rainbow('Rainbow', 'Rainbow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rainbow
include('fontawesome/Solid/Rainbow')

' renders the element
Rainbow('Rainbow', 'Rainbow', 'an optional tech label', 'an optional description')
@enduml
```

