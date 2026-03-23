# Battery2


```text
fontawesome/Solid/Battery2
```

```text
include('fontawesome/Solid/Battery2')
```



| Illustration | Battery2 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Battery2.png) | ![illustration for Battery2](../../fontawesome/Solid/Battery2.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Battery2Xs>`
- `<$Battery2Sm>`
- `<$Battery2Md>`
- `<$Battery2Lg>`





## Battery2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Battery2
include('fontawesome/Solid/Battery2')

' renders the element
Battery2('Battery2', 'Battery2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Battery2
include('fontawesome/Solid/Battery2')

' renders the element
Battery2('Battery2', 'Battery2', 'an optional tech label', 'an optional description')
@enduml
```

