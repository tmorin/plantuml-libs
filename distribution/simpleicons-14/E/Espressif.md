# Espressif


```text
simpleicons-14/E/Espressif
```

```text
include('simpleicons-14/E/Espressif')
```



| Illustration | Espressif |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Espressif.png) | ![illustration for Espressif](../../simpleicons-14/E/Espressif.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EspressifXs>`
- `<$EspressifSm>`
- `<$EspressifMd>`
- `<$EspressifLg>`





## Espressif

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Espressif
include('simpleicons-14/E/Espressif')

' renders the element
Espressif('Espressif', 'Espressif', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Espressif
include('simpleicons-14/E/Espressif')

' renders the element
Espressif('Espressif', 'Espressif', 'an optional tech label', 'an optional description')
@enduml
```

