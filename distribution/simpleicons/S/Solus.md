# Solus


```text
simpleicons/S/Solus
```

```text
include('simpleicons/S/Solus')
```



| Illustration | Solus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Solus.png) | ![illustration for Solus](../../simpleicons/S/Solus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SolusXs>`
- `<$SolusSm>`
- `<$SolusMd>`
- `<$SolusLg>`





## Solus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Solus
include('simpleicons/S/Solus')

' renders the element
Solus('Solus', 'Solus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Solus
include('simpleicons/S/Solus')

' renders the element
Solus('Solus', 'Solus', 'an optional tech label', 'an optional description')
@enduml
```

