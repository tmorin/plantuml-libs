# Glovo


```text
simpleicons/G/Glovo
```

```text
include('simpleicons/G/Glovo')
```



| Illustration | Glovo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Glovo.png) | ![illustration for Glovo](../../simpleicons/G/Glovo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GlovoXs>`
- `<$GlovoSm>`
- `<$GlovoMd>`
- `<$GlovoLg>`





## Glovo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Glovo
include('simpleicons/G/Glovo')

' renders the element
Glovo('Glovo', 'Glovo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Glovo
include('simpleicons/G/Glovo')

' renders the element
Glovo('Glovo', 'Glovo', 'an optional tech label', 'an optional description')
@enduml
```

