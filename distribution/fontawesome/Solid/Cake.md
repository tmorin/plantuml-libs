# Cake


```text
fontawesome/Solid/Cake
```

```text
include('fontawesome/Solid/Cake')
```



| Illustration | Cake |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Cake.png) | ![illustration for Cake](../../fontawesome/Solid/Cake.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CakeXs>`
- `<$CakeSm>`
- `<$CakeMd>`
- `<$CakeLg>`





## Cake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Cake
include('fontawesome/Solid/Cake')

' renders the element
Cake('Cake', 'Cake', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cake
include('fontawesome/Solid/Cake')

' renders the element
Cake('Cake', 'Cake', 'an optional tech label', 'an optional description')
@enduml
```

