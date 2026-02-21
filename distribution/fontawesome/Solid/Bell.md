# Bell


```text
fontawesome/Solid/Bell
```

```text
include('fontawesome/Solid/Bell')
```



| Illustration | Bell |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bell.png) | ![illustration for Bell](../../fontawesome/Solid/Bell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BellXs>`
- `<$BellSm>`
- `<$BellMd>`
- `<$BellLg>`





## Bell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bell
include('fontawesome/Solid/Bell')

' renders the element
Bell('Bell', 'Bell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bell
include('fontawesome/Solid/Bell')

' renders the element
Bell('Bell', 'Bell', 'an optional tech label', 'an optional description')
@enduml
```

