# Cafepress


```text
simpleicons-14/C/Cafepress
```

```text
include('simpleicons-14/C/Cafepress')
```



| Illustration | Cafepress |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Cafepress.png) | ![illustration for Cafepress](../../simpleicons-14/C/Cafepress.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CafepressXs>`
- `<$CafepressSm>`
- `<$CafepressMd>`
- `<$CafepressLg>`





## Cafepress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Cafepress
include('simpleicons-14/C/Cafepress')

' renders the element
Cafepress('Cafepress', 'Cafepress', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cafepress
include('simpleicons-14/C/Cafepress')

' renders the element
Cafepress('Cafepress', 'Cafepress', 'an optional tech label', 'an optional description')
@enduml
```

