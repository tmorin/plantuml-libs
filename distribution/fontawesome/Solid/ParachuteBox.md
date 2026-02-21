# ParachuteBox


```text
fontawesome/Solid/ParachuteBox
```

```text
include('fontawesome/Solid/ParachuteBox')
```



| Illustration | ParachuteBox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ParachuteBox.png) | ![illustration for ParachuteBox](../../fontawesome/Solid/ParachuteBox.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ParachuteBoxXs>`
- `<$ParachuteBoxSm>`
- `<$ParachuteBoxMd>`
- `<$ParachuteBoxLg>`





## ParachuteBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ParachuteBox
include('fontawesome/Solid/ParachuteBox')

' renders the element
ParachuteBox('ParachuteBox', 'Parachute Box', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ParachuteBox
include('fontawesome/Solid/ParachuteBox')

' renders the element
ParachuteBox('ParachuteBox', 'Parachute Box', 'an optional tech label', 'an optional description')
@enduml
```

