# Padlet


```text
simpleicons-14/P/Padlet
```

```text
include('simpleicons-14/P/Padlet')
```



| Illustration | Padlet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Padlet.png) | ![illustration for Padlet](../../simpleicons-14/P/Padlet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PadletXs>`
- `<$PadletSm>`
- `<$PadletMd>`
- `<$PadletLg>`





## Padlet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Padlet
include('simpleicons-14/P/Padlet')

' renders the element
Padlet('Padlet', 'Padlet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Padlet
include('simpleicons-14/P/Padlet')

' renders the element
Padlet('Padlet', 'Padlet', 'an optional tech label', 'an optional description')
@enduml
```

