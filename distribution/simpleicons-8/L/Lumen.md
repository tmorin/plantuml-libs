# Lumen


```text
simpleicons-8/L/Lumen
```

```text
include('simpleicons-8/L/Lumen')
```



| Illustration | Lumen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Lumen.png) | ![illustration for Lumen](../../simpleicons-8/L/Lumen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LumenXs>`
- `<$LumenSm>`
- `<$LumenMd>`
- `<$LumenLg>`





## Lumen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Lumen
include('simpleicons-8/L/Lumen')

' renders the element
Lumen('Lumen', 'Lumen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lumen
include('simpleicons-8/L/Lumen')

' renders the element
Lumen('Lumen', 'Lumen', 'an optional tech label', 'an optional description')
@enduml
```

