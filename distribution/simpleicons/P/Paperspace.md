# Paperspace


```text
simpleicons/P/Paperspace
```

```text
include('simpleicons/P/Paperspace')
```



| Illustration | Paperspace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Paperspace.png) | ![illustration for Paperspace](../../simpleicons/P/Paperspace.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaperspaceXs>`
- `<$PaperspaceSm>`
- `<$PaperspaceMd>`
- `<$PaperspaceLg>`





## Paperspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Paperspace
include('simpleicons/P/Paperspace')

' renders the element
Paperspace('Paperspace', 'Paperspace', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paperspace
include('simpleicons/P/Paperspace')

' renders the element
Paperspace('Paperspace', 'Paperspace', 'an optional tech label', 'an optional description')
@enduml
```

