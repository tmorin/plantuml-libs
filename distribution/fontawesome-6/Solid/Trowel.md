# Trowel


```text
fontawesome-6/Solid/Trowel
```

```text
include('fontawesome-6/Solid/Trowel')
```



| Illustration | Trowel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Trowel.png) | ![illustration for Trowel](../../fontawesome-6/Solid/Trowel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrowelXs>`
- `<$TrowelSm>`
- `<$TrowelMd>`
- `<$TrowelLg>`





## Trowel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Trowel
include('fontawesome-6/Solid/Trowel')

' renders the element
Trowel('Trowel', 'Trowel', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Trowel
include('fontawesome-6/Solid/Trowel')

' renders the element
Trowel('Trowel', 'Trowel', 'an optional tech label', 'an optional description')
@enduml
```

