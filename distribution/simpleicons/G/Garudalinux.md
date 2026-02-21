# Garudalinux


```text
simpleicons/G/Garudalinux
```

```text
include('simpleicons/G/Garudalinux')
```



| Illustration | Garudalinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Garudalinux.png) | ![illustration for Garudalinux](../../simpleicons/G/Garudalinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GarudalinuxXs>`
- `<$GarudalinuxSm>`
- `<$GarudalinuxMd>`
- `<$GarudalinuxLg>`





## Garudalinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Garudalinux
include('simpleicons/G/Garudalinux')

' renders the element
Garudalinux('Garudalinux', 'Garudalinux', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Garudalinux
include('simpleicons/G/Garudalinux')

' renders the element
Garudalinux('Garudalinux', 'Garudalinux', 'an optional tech label', 'an optional description')
@enduml
```

