# Battery0


```text
fontawesome/Solid/Battery0
```

```text
include('fontawesome/Solid/Battery0')
```



| Illustration | Battery0 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Battery0.png) | ![illustration for Battery0](../../fontawesome/Solid/Battery0.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Battery0Xs>`
- `<$Battery0Sm>`
- `<$Battery0Md>`
- `<$Battery0Lg>`





## Battery0

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Battery0
include('fontawesome/Solid/Battery0')

' renders the element
Battery0('Battery0', 'Battery0', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Battery0
include('fontawesome/Solid/Battery0')

' renders the element
Battery0('Battery0', 'Battery0', 'an optional tech label', 'an optional description')
@enduml
```

