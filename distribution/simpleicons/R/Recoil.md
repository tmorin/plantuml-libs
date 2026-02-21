# Recoil


```text
simpleicons/R/Recoil
```

```text
include('simpleicons/R/Recoil')
```



| Illustration | Recoil |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Recoil.png) | ![illustration for Recoil](../../simpleicons/R/Recoil.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RecoilXs>`
- `<$RecoilSm>`
- `<$RecoilMd>`
- `<$RecoilLg>`





## Recoil

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Recoil
include('simpleicons/R/Recoil')

' renders the element
Recoil('Recoil', 'Recoil', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Recoil
include('simpleicons/R/Recoil')

' renders the element
Recoil('Recoil', 'Recoil', 'an optional tech label', 'an optional description')
@enduml
```

