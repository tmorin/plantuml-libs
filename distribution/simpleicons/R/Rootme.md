# Rootme


```text
simpleicons/R/Rootme
```

```text
include('simpleicons/R/Rootme')
```



| Illustration | Rootme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rootme.png) | ![illustration for Rootme](../../simpleicons/R/Rootme.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RootmeXs>`
- `<$RootmeSm>`
- `<$RootmeMd>`
- `<$RootmeLg>`





## Rootme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rootme
include('simpleicons/R/Rootme')

' renders the element
Rootme('Rootme', 'Rootme', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rootme
include('simpleicons/R/Rootme')

' renders the element
Rootme('Rootme', 'Rootme', 'an optional tech label', 'an optional description')
@enduml
```

