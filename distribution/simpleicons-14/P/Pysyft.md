# Pysyft


```text
simpleicons-14/P/Pysyft
```

```text
include('simpleicons-14/P/Pysyft')
```



| Illustration | Pysyft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pysyft.png) | ![illustration for Pysyft](../../simpleicons-14/P/Pysyft.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PysyftXs>`
- `<$PysyftSm>`
- `<$PysyftMd>`
- `<$PysyftLg>`





## Pysyft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pysyft
include('simpleicons-14/P/Pysyft')

' renders the element
Pysyft('Pysyft', 'Pysyft', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pysyft
include('simpleicons-14/P/Pysyft')

' renders the element
Pysyft('Pysyft', 'Pysyft', 'an optional tech label', 'an optional description')
@enduml
```

