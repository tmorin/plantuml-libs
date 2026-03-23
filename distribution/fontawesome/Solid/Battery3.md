# Battery3


```text
fontawesome/Solid/Battery3
```

```text
include('fontawesome/Solid/Battery3')
```



| Illustration | Battery3 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Battery3.png) | ![illustration for Battery3](../../fontawesome/Solid/Battery3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Battery3Xs>`
- `<$Battery3Sm>`
- `<$Battery3Md>`
- `<$Battery3Lg>`





## Battery3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Battery3
include('fontawesome/Solid/Battery3')

' renders the element
Battery3('Battery3', 'Battery3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Battery3
include('fontawesome/Solid/Battery3')

' renders the element
Battery3('Battery3', 'Battery3', 'an optional tech label', 'an optional description')
@enduml
```

