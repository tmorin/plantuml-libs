# Zorin


```text
simpleicons-8/Z/Zorin
```

```text
include('simpleicons-8/Z/Zorin')
```



| Illustration | Zorin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Z/Zorin.png) | ![illustration for Zorin](../../simpleicons-8/Z/Zorin.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Zorin
include('simpleicons-8/Z/Zorin')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Zorin
include('simpleicons-8/Z/Zorin')

' renders the element
Zorin('Zorin', 'Zorin', 'an optional tech label', 'an optional description')
@enduml
```

