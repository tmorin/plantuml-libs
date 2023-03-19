# Opensea


```text
simpleicons-8/O/Opensea
```

```text
include('simpleicons-8/O/Opensea')
```



| Illustration | Opensea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Opensea.png) | ![illustration for Opensea](../../simpleicons-8/O/Opensea.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Opensea
include('simpleicons-8/O/Opensea')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Opensea
include('simpleicons-8/O/Opensea')

' renders the element
Opensea('Opensea', 'Opensea', 'an optional tech label', 'an optional description')
@enduml
```

