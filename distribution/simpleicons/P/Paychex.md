# Paychex


```text
simpleicons/P/Paychex
```

```text
include('simpleicons/P/Paychex')
```



| Illustration | Paychex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Paychex.png) | ![illustration for Paychex](../../simpleicons/P/Paychex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PaychexXs>`
- `<$PaychexSm>`
- `<$PaychexMd>`
- `<$PaychexLg>`





## Paychex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Paychex
include('simpleicons/P/Paychex')

' renders the element
Paychex('Paychex', 'Paychex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Paychex
include('simpleicons/P/Paychex')

' renders the element
Paychex('Paychex', 'Paychex', 'an optional tech label', 'an optional description')
@enduml
```

