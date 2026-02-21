# Reflex


```text
simpleicons-14/R/Reflex
```

```text
include('simpleicons-14/R/Reflex')
```



| Illustration | Reflex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Reflex.png) | ![illustration for Reflex](../../simpleicons-14/R/Reflex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReflexXs>`
- `<$ReflexSm>`
- `<$ReflexMd>`
- `<$ReflexLg>`





## Reflex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Reflex
include('simpleicons-14/R/Reflex')

' renders the element
Reflex('Reflex', 'Reflex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reflex
include('simpleicons-14/R/Reflex')

' renders the element
Reflex('Reflex', 'Reflex', 'an optional tech label', 'an optional description')
@enduml
```

