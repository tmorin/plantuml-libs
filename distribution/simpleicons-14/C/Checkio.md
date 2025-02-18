# Checkio


```text
simpleicons-14/C/Checkio
```

```text
include('simpleicons-14/C/Checkio')
```



| Illustration | Checkio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Checkio.png) | ![illustration for Checkio](../../simpleicons-14/C/Checkio.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckioXs>`
- `<$CheckioSm>`
- `<$CheckioMd>`
- `<$CheckioLg>`





## Checkio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Checkio
include('simpleicons-14/C/Checkio')

' renders the element
Checkio('Checkio', 'Checkio', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Checkio
include('simpleicons-14/C/Checkio')

' renders the element
Checkio('Checkio', 'Checkio', 'an optional tech label', 'an optional description')
@enduml
```

