# Scalar


```text
simpleicons-14/S/Scalar
```

```text
include('simpleicons-14/S/Scalar')
```



| Illustration | Scalar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Scalar.png) | ![illustration for Scalar](../../simpleicons-14/S/Scalar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScalarXs>`
- `<$ScalarSm>`
- `<$ScalarMd>`
- `<$ScalarLg>`





## Scalar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scalar
include('simpleicons-14/S/Scalar')

' renders the element
Scalar('Scalar', 'Scalar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scalar
include('simpleicons-14/S/Scalar')

' renders the element
Scalar('Scalar', 'Scalar', 'an optional tech label', 'an optional description')
@enduml
```

