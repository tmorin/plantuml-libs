# Vscodium


```text
simpleicons-8/V/Vscodium
```

```text
include('simpleicons-8/V/Vscodium')
```



| Illustration | Vscodium |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Vscodium.png) | ![illustration for Vscodium](../../simpleicons-8/V/Vscodium.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VscodiumXs>`
- `<$VscodiumSm>`
- `<$VscodiumMd>`
- `<$VscodiumLg>`





## Vscodium

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vscodium
include('simpleicons-8/V/Vscodium')

' renders the element
Vscodium('Vscodium', 'Vscodium', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Vscodium
include('simpleicons-8/V/Vscodium')

' renders the element
Vscodium('Vscodium', 'Vscodium', 'an optional tech label', 'an optional description')
@enduml
```

