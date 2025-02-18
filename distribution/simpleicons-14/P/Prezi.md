# Prezi


```text
simpleicons-14/P/Prezi
```

```text
include('simpleicons-14/P/Prezi')
```



| Illustration | Prezi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Prezi.png) | ![illustration for Prezi](../../simpleicons-14/P/Prezi.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PreziXs>`
- `<$PreziSm>`
- `<$PreziMd>`
- `<$PreziLg>`





## Prezi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Prezi
include('simpleicons-14/P/Prezi')

' renders the element
Prezi('Prezi', 'Prezi', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Prezi
include('simpleicons-14/P/Prezi')

' renders the element
Prezi('Prezi', 'Prezi', 'an optional tech label', 'an optional description')
@enduml
```

