# Nucleo


```text
simpleicons-14/N/Nucleo
```

```text
include('simpleicons-14/N/Nucleo')
```



| Illustration | Nucleo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nucleo.png) | ![illustration for Nucleo](../../simpleicons-14/N/Nucleo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NucleoXs>`
- `<$NucleoSm>`
- `<$NucleoMd>`
- `<$NucleoLg>`





## Nucleo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nucleo
include('simpleicons-14/N/Nucleo')

' renders the element
Nucleo('Nucleo', 'Nucleo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nucleo
include('simpleicons-14/N/Nucleo')

' renders the element
Nucleo('Nucleo', 'Nucleo', 'an optional tech label', 'an optional description')
@enduml
```

