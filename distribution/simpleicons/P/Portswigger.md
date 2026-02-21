# Portswigger


```text
simpleicons/P/Portswigger
```

```text
include('simpleicons/P/Portswigger')
```



| Illustration | Portswigger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Portswigger.png) | ![illustration for Portswigger](../../simpleicons/P/Portswigger.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PortswiggerXs>`
- `<$PortswiggerSm>`
- `<$PortswiggerMd>`
- `<$PortswiggerLg>`





## Portswigger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Portswigger
include('simpleicons/P/Portswigger')

' renders the element
Portswigger('Portswigger', 'Portswigger', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Portswigger
include('simpleicons/P/Portswigger')

' renders the element
Portswigger('Portswigger', 'Portswigger', 'an optional tech label', 'an optional description')
@enduml
```

