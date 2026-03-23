# Automobile


```text
fontawesome/Solid/Automobile
```

```text
include('fontawesome/Solid/Automobile')
```



| Illustration | Automobile |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Automobile.png) | ![illustration for Automobile](../../fontawesome/Solid/Automobile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutomobileXs>`
- `<$AutomobileSm>`
- `<$AutomobileMd>`
- `<$AutomobileLg>`





## Automobile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Automobile
include('fontawesome/Solid/Automobile')

' renders the element
Automobile('Automobile', 'Automobile', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Automobile
include('fontawesome/Solid/Automobile')

' renders the element
Automobile('Automobile', 'Automobile', 'an optional tech label', 'an optional description')
@enduml
```

