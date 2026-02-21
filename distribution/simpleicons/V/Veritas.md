# Veritas


```text
simpleicons/V/Veritas
```

```text
include('simpleicons/V/Veritas')
```



| Illustration | Veritas |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Veritas.png) | ![illustration for Veritas](../../simpleicons/V/Veritas.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VeritasXs>`
- `<$VeritasSm>`
- `<$VeritasMd>`
- `<$VeritasLg>`





## Veritas

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Veritas
include('simpleicons/V/Veritas')

' renders the element
Veritas('Veritas', 'Veritas', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Veritas
include('simpleicons/V/Veritas')

' renders the element
Veritas('Veritas', 'Veritas', 'an optional tech label', 'an optional description')
@enduml
```

