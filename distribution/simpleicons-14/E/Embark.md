# Embark


```text
simpleicons-14/E/Embark
```

```text
include('simpleicons-14/E/Embark')
```



| Illustration | Embark |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/E/Embark.png) | ![illustration for Embark](../../simpleicons-14/E/Embark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EmbarkXs>`
- `<$EmbarkSm>`
- `<$EmbarkMd>`
- `<$EmbarkLg>`





## Embark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Embark
include('simpleicons-14/E/Embark')

' renders the element
Embark('Embark', 'Embark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Embark
include('simpleicons-14/E/Embark')

' renders the element
Embark('Embark', 'Embark', 'an optional tech label', 'an optional description')
@enduml
```

