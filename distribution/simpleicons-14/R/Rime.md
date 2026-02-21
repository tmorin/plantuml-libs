# Rime


```text
simpleicons-14/R/Rime
```

```text
include('simpleicons-14/R/Rime')
```



| Illustration | Rime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rime.png) | ![illustration for Rime](../../simpleicons-14/R/Rime.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RimeXs>`
- `<$RimeSm>`
- `<$RimeMd>`
- `<$RimeLg>`





## Rime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rime
include('simpleicons-14/R/Rime')

' renders the element
Rime('Rime', 'Rime', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rime
include('simpleicons-14/R/Rime')

' renders the element
Rime('Rime', 'Rime', 'an optional tech label', 'an optional description')
@enduml
```

