# Fig


```text
simpleicons/F/Fig
```

```text
include('simpleicons/F/Fig')
```



| Illustration | Fig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fig.png) | ![illustration for Fig](../../simpleicons/F/Fig.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FigXs>`
- `<$FigSm>`
- `<$FigMd>`
- `<$FigLg>`





## Fig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fig
include('simpleicons/F/Fig')

' renders the element
Fig('Fig', 'Fig', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fig
include('simpleicons/F/Fig')

' renders the element
Fig('Fig', 'Fig', 'an optional tech label', 'an optional description')
@enduml
```

