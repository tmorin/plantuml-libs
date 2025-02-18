# Photocrowd


```text
simpleicons-14/P/Photocrowd
```

```text
include('simpleicons-14/P/Photocrowd')
```



| Illustration | Photocrowd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Photocrowd.png) | ![illustration for Photocrowd](../../simpleicons-14/P/Photocrowd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhotocrowdXs>`
- `<$PhotocrowdSm>`
- `<$PhotocrowdMd>`
- `<$PhotocrowdLg>`





## Photocrowd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Photocrowd
include('simpleicons-14/P/Photocrowd')

' renders the element
Photocrowd('Photocrowd', 'Photocrowd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Photocrowd
include('simpleicons-14/P/Photocrowd')

' renders the element
Photocrowd('Photocrowd', 'Photocrowd', 'an optional tech label', 'an optional description')
@enduml
```

