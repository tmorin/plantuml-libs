# Unilever


```text
simpleicons-14/U/Unilever
```

```text
include('simpleicons-14/U/Unilever')
```



| Illustration | Unilever |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Unilever.png) | ![illustration for Unilever](../../simpleicons-14/U/Unilever.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnileverXs>`
- `<$UnileverSm>`
- `<$UnileverMd>`
- `<$UnileverLg>`





## Unilever

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Unilever
include('simpleicons-14/U/Unilever')

' renders the element
Unilever('Unilever', 'Unilever', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unilever
include('simpleicons-14/U/Unilever')

' renders the element
Unilever('Unilever', 'Unilever', 'an optional tech label', 'an optional description')
@enduml
```

