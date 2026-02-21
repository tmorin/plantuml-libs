# Hbomax


```text
simpleicons-14/H/Hbomax
```

```text
include('simpleicons-14/H/Hbomax')
```



| Illustration | Hbomax |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/H/Hbomax.png) | ![illustration for Hbomax](../../simpleicons-14/H/Hbomax.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HbomaxXs>`
- `<$HbomaxSm>`
- `<$HbomaxMd>`
- `<$HbomaxLg>`





## Hbomax

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Hbomax
include('simpleicons-14/H/Hbomax')

' renders the element
Hbomax('Hbomax', 'Hbomax', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hbomax
include('simpleicons-14/H/Hbomax')

' renders the element
Hbomax('Hbomax', 'Hbomax', 'an optional tech label', 'an optional description')
@enduml
```

