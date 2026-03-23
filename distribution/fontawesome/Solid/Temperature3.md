# Temperature3


```text
fontawesome/Solid/Temperature3
```

```text
include('fontawesome/Solid/Temperature3')
```



| Illustration | Temperature3 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Temperature3.png) | ![illustration for Temperature3](../../fontawesome/Solid/Temperature3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Temperature3Xs>`
- `<$Temperature3Sm>`
- `<$Temperature3Md>`
- `<$Temperature3Lg>`





## Temperature3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Temperature3
include('fontawesome/Solid/Temperature3')

' renders the element
Temperature3('Temperature3', 'Temperature3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Temperature3
include('fontawesome/Solid/Temperature3')

' renders the element
Temperature3('Temperature3', 'Temperature3', 'an optional tech label', 'an optional description')
@enduml
```

