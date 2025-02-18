# Picardsurgeles


```text
simpleicons-14/P/Picardsurgeles
```

```text
include('simpleicons-14/P/Picardsurgeles')
```



| Illustration | Picardsurgeles |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Picardsurgeles.png) | ![illustration for Picardsurgeles](../../simpleicons-14/P/Picardsurgeles.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PicardsurgelesXs>`
- `<$PicardsurgelesSm>`
- `<$PicardsurgelesMd>`
- `<$PicardsurgelesLg>`





## Picardsurgeles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Picardsurgeles
include('simpleicons-14/P/Picardsurgeles')

' renders the element
Picardsurgeles('Picardsurgeles', 'Picardsurgeles', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Picardsurgeles
include('simpleicons-14/P/Picardsurgeles')

' renders the element
Picardsurgeles('Picardsurgeles', 'Picardsurgeles', 'an optional tech label', 'an optional description')
@enduml
```

