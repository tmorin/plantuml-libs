# Onestream


```text
simpleicons/O/Onestream
```

```text
include('simpleicons/O/Onestream')
```



| Illustration | Onestream |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Onestream.png) | ![illustration for Onestream](../../simpleicons/O/Onestream.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OnestreamXs>`
- `<$OnestreamSm>`
- `<$OnestreamMd>`
- `<$OnestreamLg>`





## Onestream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Onestream
include('simpleicons/O/Onestream')

' renders the element
Onestream('Onestream', 'Onestream', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Onestream
include('simpleicons/O/Onestream')

' renders the element
Onestream('Onestream', 'Onestream', 'an optional tech label', 'an optional description')
@enduml
```

