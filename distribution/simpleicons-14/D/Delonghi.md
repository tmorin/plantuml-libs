# Delonghi


```text
simpleicons-14/D/Delonghi
```

```text
include('simpleicons-14/D/Delonghi')
```



| Illustration | Delonghi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Delonghi.png) | ![illustration for Delonghi](../../simpleicons-14/D/Delonghi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DelonghiXs>`
- `<$DelonghiSm>`
- `<$DelonghiMd>`
- `<$DelonghiLg>`





## Delonghi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Delonghi
include('simpleicons-14/D/Delonghi')

' renders the element
Delonghi('Delonghi', 'Delonghi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Delonghi
include('simpleicons-14/D/Delonghi')

' renders the element
Delonghi('Delonghi', 'Delonghi', 'an optional tech label', 'an optional description')
@enduml
```

