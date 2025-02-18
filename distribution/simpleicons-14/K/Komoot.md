# Komoot


```text
simpleicons-14/K/Komoot
```

```text
include('simpleicons-14/K/Komoot')
```



| Illustration | Komoot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Komoot.png) | ![illustration for Komoot](../../simpleicons-14/K/Komoot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KomootXs>`
- `<$KomootSm>`
- `<$KomootMd>`
- `<$KomootLg>`





## Komoot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Komoot
include('simpleicons-14/K/Komoot')

' renders the element
Komoot('Komoot', 'Komoot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Komoot
include('simpleicons-14/K/Komoot')

' renders the element
Komoot('Komoot', 'Komoot', 'an optional tech label', 'an optional description')
@enduml
```

