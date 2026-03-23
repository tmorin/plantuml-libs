# Hamburger


```text
fontawesome/Solid/Hamburger
```

```text
include('fontawesome/Solid/Hamburger')
```



| Illustration | Hamburger |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Hamburger.png) | ![illustration for Hamburger](../../fontawesome/Solid/Hamburger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HamburgerXs>`
- `<$HamburgerSm>`
- `<$HamburgerMd>`
- `<$HamburgerLg>`





## Hamburger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hamburger
include('fontawesome/Solid/Hamburger')

' renders the element
Hamburger('Hamburger', 'Hamburger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hamburger
include('fontawesome/Solid/Hamburger')

' renders the element
Hamburger('Hamburger', 'Hamburger', 'an optional tech label', 'an optional description')
@enduml
```

