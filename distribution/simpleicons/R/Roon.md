# Roon


```text
simpleicons/R/Roon
```

```text
include('simpleicons/R/Roon')
```



| Illustration | Roon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Roon.png) | ![illustration for Roon](../../simpleicons/R/Roon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoonXs>`
- `<$RoonSm>`
- `<$RoonMd>`
- `<$RoonLg>`





## Roon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Roon
include('simpleicons/R/Roon')

' renders the element
Roon('Roon', 'Roon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Roon
include('simpleicons/R/Roon')

' renders the element
Roon('Roon', 'Roon', 'an optional tech label', 'an optional description')
@enduml
```

