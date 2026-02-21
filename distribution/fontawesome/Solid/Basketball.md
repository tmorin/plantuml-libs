# Basketball


```text
fontawesome/Solid/Basketball
```

```text
include('fontawesome/Solid/Basketball')
```



| Illustration | Basketball |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Basketball.png) | ![illustration for Basketball](../../fontawesome/Solid/Basketball.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BasketballXs>`
- `<$BasketballSm>`
- `<$BasketballMd>`
- `<$BasketballLg>`





## Basketball

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Basketball
include('fontawesome/Solid/Basketball')

' renders the element
Basketball('Basketball', 'Basketball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Basketball
include('fontawesome/Solid/Basketball')

' renders the element
Basketball('Basketball', 'Basketball', 'an optional tech label', 'an optional description')
@enduml
```

