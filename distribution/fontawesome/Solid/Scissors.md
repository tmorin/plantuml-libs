# Scissors


```text
fontawesome/Solid/Scissors
```

```text
include('fontawesome/Solid/Scissors')
```



| Illustration | Scissors |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Scissors.png) | ![illustration for Scissors](../../fontawesome/Solid/Scissors.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScissorsXs>`
- `<$ScissorsSm>`
- `<$ScissorsMd>`
- `<$ScissorsLg>`





## Scissors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Scissors
include('fontawesome/Solid/Scissors')

' renders the element
Scissors('Scissors', 'Scissors', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scissors
include('fontawesome/Solid/Scissors')

' renders the element
Scissors('Scissors', 'Scissors', 'an optional tech label', 'an optional description')
@enduml
```

