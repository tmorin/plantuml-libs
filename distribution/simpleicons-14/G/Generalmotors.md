# Generalmotors


```text
simpleicons-14/G/Generalmotors
```

```text
include('simpleicons-14/G/Generalmotors')
```



| Illustration | Generalmotors |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Generalmotors.png) | ![illustration for Generalmotors](../../simpleicons-14/G/Generalmotors.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GeneralmotorsXs>`
- `<$GeneralmotorsSm>`
- `<$GeneralmotorsMd>`
- `<$GeneralmotorsLg>`





## Generalmotors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Generalmotors
include('simpleicons-14/G/Generalmotors')

' renders the element
Generalmotors('Generalmotors', 'Generalmotors', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Generalmotors
include('simpleicons-14/G/Generalmotors')

' renders the element
Generalmotors('Generalmotors', 'Generalmotors', 'an optional tech label', 'an optional description')
@enduml
```

