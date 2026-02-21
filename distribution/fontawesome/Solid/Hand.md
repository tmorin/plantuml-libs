# Hand


```text
fontawesome/Solid/Hand
```

```text
include('fontawesome/Solid/Hand')
```



| Illustration | Hand |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Hand.png) | ![illustration for Hand](../../fontawesome/Solid/Hand.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandXs>`
- `<$HandSm>`
- `<$HandMd>`
- `<$HandLg>`





## Hand

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hand
include('fontawesome/Solid/Hand')

' renders the element
Hand('Hand', 'Hand', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hand
include('fontawesome/Solid/Hand')

' renders the element
Hand('Hand', 'Hand', 'an optional tech label', 'an optional description')
@enduml
```

