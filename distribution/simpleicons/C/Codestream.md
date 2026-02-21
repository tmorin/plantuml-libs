# Codestream


```text
simpleicons/C/Codestream
```

```text
include('simpleicons/C/Codestream')
```



| Illustration | Codestream |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Codestream.png) | ![illustration for Codestream](../../simpleicons/C/Codestream.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodestreamXs>`
- `<$CodestreamSm>`
- `<$CodestreamMd>`
- `<$CodestreamLg>`





## Codestream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Codestream
include('simpleicons/C/Codestream')

' renders the element
Codestream('Codestream', 'Codestream', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codestream
include('simpleicons/C/Codestream')

' renders the element
Codestream('Codestream', 'Codestream', 'an optional tech label', 'an optional description')
@enduml
```

