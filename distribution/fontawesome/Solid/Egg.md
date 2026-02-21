# Egg


```text
fontawesome/Solid/Egg
```

```text
include('fontawesome/Solid/Egg')
```



| Illustration | Egg |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Egg.png) | ![illustration for Egg](../../fontawesome/Solid/Egg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EggXs>`
- `<$EggSm>`
- `<$EggMd>`
- `<$EggLg>`





## Egg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Egg
include('fontawesome/Solid/Egg')

' renders the element
Egg('Egg', 'Egg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Egg
include('fontawesome/Solid/Egg')

' renders the element
Egg('Egg', 'Egg', 'an optional tech label', 'an optional description')
@enduml
```

