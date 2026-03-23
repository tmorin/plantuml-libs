# Temperature2


```text
fontawesome/Solid/Temperature2
```

```text
include('fontawesome/Solid/Temperature2')
```



| Illustration | Temperature2 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Temperature2.png) | ![illustration for Temperature2](../../fontawesome/Solid/Temperature2.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Temperature2Xs>`
- `<$Temperature2Sm>`
- `<$Temperature2Md>`
- `<$Temperature2Lg>`





## Temperature2

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Temperature2
include('fontawesome/Solid/Temperature2')

' renders the element
Temperature2('Temperature2', 'Temperature2', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Temperature2
include('fontawesome/Solid/Temperature2')

' renders the element
Temperature2('Temperature2', 'Temperature2', 'an optional tech label', 'an optional description')
@enduml
```

