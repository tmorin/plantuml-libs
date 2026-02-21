# Myget


```text
simpleicons-14/M/Myget
```

```text
include('simpleicons-14/M/Myget')
```



| Illustration | Myget |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Myget.png) | ![illustration for Myget](../../simpleicons-14/M/Myget.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Myget
include('simpleicons-14/M/Myget')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Myget
include('simpleicons-14/M/Myget')

' renders the element
Myget('Myget', 'Myget', 'an optional tech label', 'an optional description')
@enduml
```

