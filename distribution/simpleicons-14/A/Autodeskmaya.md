# Autodeskmaya


```text
simpleicons-14/A/Autodeskmaya
```

```text
include('simpleicons-14/A/Autodeskmaya')
```



| Illustration | Autodeskmaya |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Autodeskmaya.png) | ![illustration for Autodeskmaya](../../simpleicons-14/A/Autodeskmaya.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutodeskmayaXs>`
- `<$AutodeskmayaSm>`
- `<$AutodeskmayaMd>`
- `<$AutodeskmayaLg>`





## Autodeskmaya

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Autodeskmaya
include('simpleicons-14/A/Autodeskmaya')

' renders the element
Autodeskmaya('Autodeskmaya', 'Autodeskmaya', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Autodeskmaya
include('simpleicons-14/A/Autodeskmaya')

' renders the element
Autodeskmaya('Autodeskmaya', 'Autodeskmaya', 'an optional tech label', 'an optional description')
@enduml
```

