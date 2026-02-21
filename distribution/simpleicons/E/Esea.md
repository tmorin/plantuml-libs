# Esea


```text
simpleicons/E/Esea
```

```text
include('simpleicons/E/Esea')
```



| Illustration | Esea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Esea.png) | ![illustration for Esea](../../simpleicons/E/Esea.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EseaXs>`
- `<$EseaSm>`
- `<$EseaMd>`
- `<$EseaLg>`





## Esea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Esea
include('simpleicons/E/Esea')

' renders the element
Esea('Esea', 'Esea', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Esea
include('simpleicons/E/Esea')

' renders the element
Esea('Esea', 'Esea', 'an optional tech label', 'an optional description')
@enduml
```

