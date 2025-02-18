# Opensea


```text
simpleicons-14/O/Opensea
```

```text
include('simpleicons-14/O/Opensea')
```



| Illustration | Opensea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Opensea.png) | ![illustration for Opensea](../../simpleicons-14/O/Opensea.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenseaXs>`
- `<$OpenseaSm>`
- `<$OpenseaMd>`
- `<$OpenseaLg>`





## Opensea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Opensea
include('simpleicons-14/O/Opensea')

' renders the element
Opensea('Opensea', 'Opensea', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opensea
include('simpleicons-14/O/Opensea')

' renders the element
Opensea('Opensea', 'Opensea', 'an optional tech label', 'an optional description')
@enduml
```

