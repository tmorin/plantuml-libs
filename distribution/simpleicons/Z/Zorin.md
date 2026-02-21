# Zorin


```text
simpleicons/Z/Zorin
```

```text
include('simpleicons/Z/Zorin')
```



| Illustration | Zorin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Z/Zorin.png) | ![illustration for Zorin](../../simpleicons/Z/Zorin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ZorinXs>`
- `<$ZorinSm>`
- `<$ZorinMd>`
- `<$ZorinLg>`





## Zorin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Zorin
include('simpleicons/Z/Zorin')

' renders the element
Zorin('Zorin', 'Zorin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zorin
include('simpleicons/Z/Zorin')

' renders the element
Zorin('Zorin', 'Zorin', 'an optional tech label', 'an optional description')
@enduml
```

