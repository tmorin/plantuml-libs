# Signal5


```text
fontawesome/Solid/Signal5
```

```text
include('fontawesome/Solid/Signal5')
```



| Illustration | Signal5 |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Signal5.png) | ![illustration for Signal5](../../fontawesome/Solid/Signal5.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Signal5Xs>`
- `<$Signal5Sm>`
- `<$Signal5Md>`
- `<$Signal5Lg>`





## Signal5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Signal5
include('fontawesome/Solid/Signal5')

' renders the element
Signal5('Signal5', 'Signal5', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Signal5
include('fontawesome/Solid/Signal5')

' renders the element
Signal5('Signal5', 'Signal5', 'an optional tech label', 'an optional description')
@enduml
```

