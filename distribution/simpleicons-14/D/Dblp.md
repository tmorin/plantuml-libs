# Dblp


```text
simpleicons-14/D/Dblp
```

```text
include('simpleicons-14/D/Dblp')
```



| Illustration | Dblp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dblp.png) | ![illustration for Dblp](../../simpleicons-14/D/Dblp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DblpXs>`
- `<$DblpSm>`
- `<$DblpMd>`
- `<$DblpLg>`





## Dblp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dblp
include('simpleicons-14/D/Dblp')

' renders the element
Dblp('Dblp', 'Dblp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dblp
include('simpleicons-14/D/Dblp')

' renders the element
Dblp('Dblp', 'Dblp', 'an optional tech label', 'an optional description')
@enduml
```

