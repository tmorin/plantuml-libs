# Garudalinux


```text
simpleicons-14/G/Garudalinux
```

```text
include('simpleicons-14/G/Garudalinux')
```



| Illustration | Garudalinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Garudalinux.png) | ![illustration for Garudalinux](../../simpleicons-14/G/Garudalinux.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Garudalinux
include('simpleicons-14/G/Garudalinux')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Garudalinux
include('simpleicons-14/G/Garudalinux')

' renders the element
Garudalinux('Garudalinux', 'Garudalinux', 'an optional tech label', 'an optional description')
@enduml
```

