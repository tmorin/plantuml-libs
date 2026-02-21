# Vivo


```text
simpleicons/V/Vivo
```

```text
include('simpleicons/V/Vivo')
```



| Illustration | Vivo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vivo.png) | ![illustration for Vivo](../../simpleicons/V/Vivo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VivoXs>`
- `<$VivoSm>`
- `<$VivoMd>`
- `<$VivoLg>`





## Vivo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vivo
include('simpleicons/V/Vivo')

' renders the element
Vivo('Vivo', 'Vivo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vivo
include('simpleicons/V/Vivo')

' renders the element
Vivo('Vivo', 'Vivo', 'an optional tech label', 'an optional description')
@enduml
```

