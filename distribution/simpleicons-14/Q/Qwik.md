# Qwik


```text
simpleicons-14/Q/Qwik
```

```text
include('simpleicons-14/Q/Qwik')
```



| Illustration | Qwik |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Qwik.png) | ![illustration for Qwik](../../simpleicons-14/Q/Qwik.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QwikXs>`
- `<$QwikSm>`
- `<$QwikMd>`
- `<$QwikLg>`





## Qwik

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Qwik
include('simpleicons-14/Q/Qwik')

' renders the element
Qwik('Qwik', 'Qwik', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qwik
include('simpleicons-14/Q/Qwik')

' renders the element
Qwik('Qwik', 'Qwik', 'an optional tech label', 'an optional description')
@enduml
```

