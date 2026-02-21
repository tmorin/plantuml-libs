# Clarivate


```text
simpleicons-14/C/Clarivate
```

```text
include('simpleicons-14/C/Clarivate')
```



| Illustration | Clarivate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Clarivate.png) | ![illustration for Clarivate](../../simpleicons-14/C/Clarivate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClarivateXs>`
- `<$ClarivateSm>`
- `<$ClarivateMd>`
- `<$ClarivateLg>`





## Clarivate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Clarivate
include('simpleicons-14/C/Clarivate')

' renders the element
Clarivate('Clarivate', 'Clarivate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clarivate
include('simpleicons-14/C/Clarivate')

' renders the element
Clarivate('Clarivate', 'Clarivate', 'an optional tech label', 'an optional description')
@enduml
```

