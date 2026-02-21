# Packt


```text
simpleicons/P/Packt
```

```text
include('simpleicons/P/Packt')
```



| Illustration | Packt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Packt.png) | ![illustration for Packt](../../simpleicons/P/Packt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PacktXs>`
- `<$PacktSm>`
- `<$PacktMd>`
- `<$PacktLg>`





## Packt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Packt
include('simpleicons/P/Packt')

' renders the element
Packt('Packt', 'Packt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Packt
include('simpleicons/P/Packt')

' renders the element
Packt('Packt', 'Packt', 'an optional tech label', 'an optional description')
@enduml
```

