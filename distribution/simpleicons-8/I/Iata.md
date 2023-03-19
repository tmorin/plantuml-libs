# Iata


```text
simpleicons-8/I/Iata
```

```text
include('simpleicons-8/I/Iata')
```



| Illustration | Iata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/I/Iata.png) | ![illustration for Iata](../../simpleicons-8/I/Iata.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IataXs>`
- `<$IataSm>`
- `<$IataMd>`
- `<$IataLg>`





## Iata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Iata
include('simpleicons-8/I/Iata')

' renders the element
Iata('Iata', 'Iata', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Iata
include('simpleicons-8/I/Iata')

' renders the element
Iata('Iata', 'Iata', 'an optional tech label', 'an optional description')
@enduml
```

