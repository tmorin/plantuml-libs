# Libra


```text
fontawesome/Solid/Libra
```

```text
include('fontawesome/Solid/Libra')
```



| Illustration | Libra |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Libra.png) | ![illustration for Libra](../../fontawesome/Solid/Libra.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibraXs>`
- `<$LibraSm>`
- `<$LibraMd>`
- `<$LibraLg>`





## Libra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Libra
include('fontawesome/Solid/Libra')

' renders the element
Libra('Libra', 'Libra', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Libra
include('fontawesome/Solid/Libra')

' renders the element
Libra('Libra', 'Libra', 'an optional tech label', 'an optional description')
@enduml
```

