# Chromatic


```text
simpleicons-14/C/Chromatic
```

```text
include('simpleicons-14/C/Chromatic')
```



| Illustration | Chromatic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Chromatic.png) | ![illustration for Chromatic](../../simpleicons-14/C/Chromatic.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChromaticXs>`
- `<$ChromaticSm>`
- `<$ChromaticMd>`
- `<$ChromaticLg>`





## Chromatic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Chromatic
include('simpleicons-14/C/Chromatic')

' renders the element
Chromatic('Chromatic', 'Chromatic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Chromatic
include('simpleicons-14/C/Chromatic')

' renders the element
Chromatic('Chromatic', 'Chromatic', 'an optional tech label', 'an optional description')
@enduml
```

