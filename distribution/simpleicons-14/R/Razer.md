# Razer


```text
simpleicons-14/R/Razer
```

```text
include('simpleicons-14/R/Razer')
```



| Illustration | Razer |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Razer.png) | ![illustration for Razer](../../simpleicons-14/R/Razer.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RazerXs>`
- `<$RazerSm>`
- `<$RazerMd>`
- `<$RazerLg>`





## Razer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Razer
include('simpleicons-14/R/Razer')

' renders the element
Razer('Razer', 'Razer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Razer
include('simpleicons-14/R/Razer')

' renders the element
Razer('Razer', 'Razer', 'an optional tech label', 'an optional description')
@enduml
```

