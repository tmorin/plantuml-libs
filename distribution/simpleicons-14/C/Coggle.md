# Coggle


```text
simpleicons-14/C/Coggle
```

```text
include('simpleicons-14/C/Coggle')
```



| Illustration | Coggle |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Coggle.png) | ![illustration for Coggle](../../simpleicons-14/C/Coggle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoggleXs>`
- `<$CoggleSm>`
- `<$CoggleMd>`
- `<$CoggleLg>`





## Coggle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coggle
include('simpleicons-14/C/Coggle')

' renders the element
Coggle('Coggle', 'Coggle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coggle
include('simpleicons-14/C/Coggle')

' renders the element
Coggle('Coggle', 'Coggle', 'an optional tech label', 'an optional description')
@enduml
```

