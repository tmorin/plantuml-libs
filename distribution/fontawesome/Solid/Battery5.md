# Battery5


```text
fontawesome/Solid/Battery5
```

```text
include('fontawesome/Solid/Battery5')
```



| Illustration | Battery5 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Battery5.png) | ![illustration for Battery5](../../fontawesome/Solid/Battery5.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Battery5Xs>`
- `<$Battery5Sm>`
- `<$Battery5Md>`
- `<$Battery5Lg>`





## Battery5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Battery5
include('fontawesome/Solid/Battery5')

' renders the element
Battery5('Battery5', 'Battery5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Battery5
include('fontawesome/Solid/Battery5')

' renders the element
Battery5('Battery5', 'Battery5', 'an optional tech label', 'an optional description')
@enduml
```

