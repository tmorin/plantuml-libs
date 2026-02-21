# Namesilo


```text
simpleicons/N/Namesilo
```

```text
include('simpleicons/N/Namesilo')
```



| Illustration | Namesilo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Namesilo.png) | ![illustration for Namesilo](../../simpleicons/N/Namesilo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NamesiloXs>`
- `<$NamesiloSm>`
- `<$NamesiloMd>`
- `<$NamesiloLg>`





## Namesilo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Namesilo
include('simpleicons/N/Namesilo')

' renders the element
Namesilo('Namesilo', 'Namesilo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Namesilo
include('simpleicons/N/Namesilo')

' renders the element
Namesilo('Namesilo', 'Namesilo', 'an optional tech label', 'an optional description')
@enduml
```

