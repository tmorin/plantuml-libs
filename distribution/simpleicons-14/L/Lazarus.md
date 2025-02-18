# Lazarus


```text
simpleicons-14/L/Lazarus
```

```text
include('simpleicons-14/L/Lazarus')
```



| Illustration | Lazarus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Lazarus.png) | ![illustration for Lazarus](../../simpleicons-14/L/Lazarus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LazarusXs>`
- `<$LazarusSm>`
- `<$LazarusMd>`
- `<$LazarusLg>`





## Lazarus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Lazarus
include('simpleicons-14/L/Lazarus')

' renders the element
Lazarus('Lazarus', 'Lazarus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lazarus
include('simpleicons-14/L/Lazarus')

' renders the element
Lazarus('Lazarus', 'Lazarus', 'an optional tech label', 'an optional description')
@enduml
```

