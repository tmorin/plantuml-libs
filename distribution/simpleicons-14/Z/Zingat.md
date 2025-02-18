# Zingat


```text
simpleicons-14/Z/Zingat
```

```text
include('simpleicons-14/Z/Zingat')
```



| Illustration | Zingat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zingat.png) | ![illustration for Zingat](../../simpleicons-14/Z/Zingat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZingatXs>`
- `<$ZingatSm>`
- `<$ZingatMd>`
- `<$ZingatLg>`





## Zingat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zingat
include('simpleicons-14/Z/Zingat')

' renders the element
Zingat('Zingat', 'Zingat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zingat
include('simpleicons-14/Z/Zingat')

' renders the element
Zingat('Zingat', 'Zingat', 'an optional tech label', 'an optional description')
@enduml
```

