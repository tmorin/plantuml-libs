# Battery4


```text
fontawesome/Solid/Battery4
```

```text
include('fontawesome/Solid/Battery4')
```



| Illustration | Battery4 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Battery4.png) | ![illustration for Battery4](../../fontawesome/Solid/Battery4.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Battery4Xs>`
- `<$Battery4Sm>`
- `<$Battery4Md>`
- `<$Battery4Lg>`





## Battery4

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Battery4
include('fontawesome/Solid/Battery4')

' renders the element
Battery4('Battery4', 'Battery4', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Battery4
include('fontawesome/Solid/Battery4')

' renders the element
Battery4('Battery4', 'Battery4', 'an optional tech label', 'an optional description')
@enduml
```

