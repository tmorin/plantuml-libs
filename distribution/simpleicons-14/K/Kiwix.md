# Kiwix


```text
simpleicons-14/K/Kiwix
```

```text
include('simpleicons-14/K/Kiwix')
```



| Illustration | Kiwix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kiwix.png) | ![illustration for Kiwix](../../simpleicons-14/K/Kiwix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KiwixXs>`
- `<$KiwixSm>`
- `<$KiwixMd>`
- `<$KiwixLg>`





## Kiwix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kiwix
include('simpleicons-14/K/Kiwix')

' renders the element
Kiwix('Kiwix', 'Kiwix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kiwix
include('simpleicons-14/K/Kiwix')

' renders the element
Kiwix('Kiwix', 'Kiwix', 'an optional tech label', 'an optional description')
@enduml
```

