# Topdotgg


```text
simpleicons/T/Topdotgg
```

```text
include('simpleicons/T/Topdotgg')
```



| Illustration | Topdotgg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Topdotgg.png) | ![illustration for Topdotgg](../../simpleicons/T/Topdotgg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TopdotggXs>`
- `<$TopdotggSm>`
- `<$TopdotggMd>`
- `<$TopdotggLg>`





## Topdotgg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Topdotgg
include('simpleicons/T/Topdotgg')

' renders the element
Topdotgg('Topdotgg', 'Topdotgg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Topdotgg
include('simpleicons/T/Topdotgg')

' renders the element
Topdotgg('Topdotgg', 'Topdotgg', 'an optional tech label', 'an optional description')
@enduml
```

