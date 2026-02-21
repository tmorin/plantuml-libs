# Myget


```text
simpleicons/M/Myget
```

```text
include('simpleicons/M/Myget')
```



| Illustration | Myget |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Myget.png) | ![illustration for Myget](../../simpleicons/M/Myget.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MygetXs>`
- `<$MygetSm>`
- `<$MygetMd>`
- `<$MygetLg>`





## Myget

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Myget
include('simpleicons/M/Myget')

' renders the element
Myget('Myget', 'Myget', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Myget
include('simpleicons/M/Myget')

' renders the element
Myget('Myget', 'Myget', 'an optional tech label', 'an optional description')
@enduml
```

