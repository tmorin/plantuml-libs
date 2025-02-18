# Nasa


```text
simpleicons-14/N/Nasa
```

```text
include('simpleicons-14/N/Nasa')
```



| Illustration | Nasa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nasa.png) | ![illustration for Nasa](../../simpleicons-14/N/Nasa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NasaXs>`
- `<$NasaSm>`
- `<$NasaMd>`
- `<$NasaLg>`





## Nasa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nasa
include('simpleicons-14/N/Nasa')

' renders the element
Nasa('Nasa', 'Nasa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nasa
include('simpleicons-14/N/Nasa')

' renders the element
Nasa('Nasa', 'Nasa', 'an optional tech label', 'an optional description')
@enduml
```

