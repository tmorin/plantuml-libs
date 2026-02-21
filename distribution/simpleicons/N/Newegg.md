# Newegg


```text
simpleicons/N/Newegg
```

```text
include('simpleicons/N/Newegg')
```



| Illustration | Newegg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Newegg.png) | ![illustration for Newegg](../../simpleicons/N/Newegg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NeweggXs>`
- `<$NeweggSm>`
- `<$NeweggMd>`
- `<$NeweggLg>`





## Newegg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Newegg
include('simpleicons/N/Newegg')

' renders the element
Newegg('Newegg', 'Newegg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Newegg
include('simpleicons/N/Newegg')

' renders the element
Newegg('Newegg', 'Newegg', 'an optional tech label', 'an optional description')
@enduml
```

