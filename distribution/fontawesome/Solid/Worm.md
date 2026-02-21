# Worm


```text
fontawesome/Solid/Worm
```

```text
include('fontawesome/Solid/Worm')
```



| Illustration | Worm |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Worm.png) | ![illustration for Worm](../../fontawesome/Solid/Worm.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WormXs>`
- `<$WormSm>`
- `<$WormMd>`
- `<$WormLg>`





## Worm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Worm
include('fontawesome/Solid/Worm')

' renders the element
Worm('Worm', 'Worm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Worm
include('fontawesome/Solid/Worm')

' renders the element
Worm('Worm', 'Worm', 'an optional tech label', 'an optional description')
@enduml
```

