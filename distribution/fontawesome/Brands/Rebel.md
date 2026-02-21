# Rebel


```text
fontawesome/Brands/Rebel
```

```text
include('fontawesome/Brands/Rebel')
```



| Illustration | Rebel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Rebel.png) | ![illustration for Rebel](../../fontawesome/Brands/Rebel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RebelXs>`
- `<$RebelSm>`
- `<$RebelMd>`
- `<$RebelLg>`





## Rebel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Rebel
include('fontawesome/Brands/Rebel')

' renders the element
Rebel('Rebel', 'Rebel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rebel
include('fontawesome/Brands/Rebel')

' renders the element
Rebel('Rebel', 'Rebel', 'an optional tech label', 'an optional description')
@enduml
```

