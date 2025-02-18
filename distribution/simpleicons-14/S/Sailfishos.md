# Sailfishos


```text
simpleicons-14/S/Sailfishos
```

```text
include('simpleicons-14/S/Sailfishos')
```



| Illustration | Sailfishos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sailfishos.png) | ![illustration for Sailfishos](../../simpleicons-14/S/Sailfishos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SailfishosXs>`
- `<$SailfishosSm>`
- `<$SailfishosMd>`
- `<$SailfishosLg>`





## Sailfishos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sailfishos
include('simpleicons-14/S/Sailfishos')

' renders the element
Sailfishos('Sailfishos', 'Sailfishos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sailfishos
include('simpleicons-14/S/Sailfishos')

' renders the element
Sailfishos('Sailfishos', 'Sailfishos', 'an optional tech label', 'an optional description')
@enduml
```

