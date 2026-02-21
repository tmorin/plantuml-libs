# Keenetic


```text
simpleicons-14/K/Keenetic
```

```text
include('simpleicons-14/K/Keenetic')
```



| Illustration | Keenetic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Keenetic.png) | ![illustration for Keenetic](../../simpleicons-14/K/Keenetic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeeneticXs>`
- `<$KeeneticSm>`
- `<$KeeneticMd>`
- `<$KeeneticLg>`





## Keenetic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Keenetic
include('simpleicons-14/K/Keenetic')

' renders the element
Keenetic('Keenetic', 'Keenetic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Keenetic
include('simpleicons-14/K/Keenetic')

' renders the element
Keenetic('Keenetic', 'Keenetic', 'an optional tech label', 'an optional description')
@enduml
```

