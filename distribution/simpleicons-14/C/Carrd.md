# Carrd


```text
simpleicons-14/C/Carrd
```

```text
include('simpleicons-14/C/Carrd')
```



| Illustration | Carrd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Carrd.png) | ![illustration for Carrd](../../simpleicons-14/C/Carrd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarrdXs>`
- `<$CarrdSm>`
- `<$CarrdMd>`
- `<$CarrdLg>`





## Carrd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Carrd
include('simpleicons-14/C/Carrd')

' renders the element
Carrd('Carrd', 'Carrd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Carrd
include('simpleicons-14/C/Carrd')

' renders the element
Carrd('Carrd', 'Carrd', 'an optional tech label', 'an optional description')
@enduml
```

