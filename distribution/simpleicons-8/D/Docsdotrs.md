# Docsdotrs


```text
simpleicons-8/D/Docsdotrs
```

```text
include('simpleicons-8/D/Docsdotrs')
```



| Illustration | Docsdotrs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Docsdotrs.png) | ![illustration for Docsdotrs](../../simpleicons-8/D/Docsdotrs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DocsdotrsXs>`
- `<$DocsdotrsSm>`
- `<$DocsdotrsMd>`
- `<$DocsdotrsLg>`





## Docsdotrs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Docsdotrs
include('simpleicons-8/D/Docsdotrs')

' renders the element
Docsdotrs('Docsdotrs', 'Docsdotrs', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Docsdotrs
include('simpleicons-8/D/Docsdotrs')

' renders the element
Docsdotrs('Docsdotrs', 'Docsdotrs', 'an optional tech label', 'an optional description')
@enduml
```

