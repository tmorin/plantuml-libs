# Piapro


```text
simpleicons/P/Piapro
```

```text
include('simpleicons/P/Piapro')
```



| Illustration | Piapro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Piapro.png) | ![illustration for Piapro](../../simpleicons/P/Piapro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PiaproXs>`
- `<$PiaproSm>`
- `<$PiaproMd>`
- `<$PiaproLg>`





## Piapro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Piapro
include('simpleicons/P/Piapro')

' renders the element
Piapro('Piapro', 'Piapro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Piapro
include('simpleicons/P/Piapro')

' renders the element
Piapro('Piapro', 'Piapro', 'an optional tech label', 'an optional description')
@enduml
```

