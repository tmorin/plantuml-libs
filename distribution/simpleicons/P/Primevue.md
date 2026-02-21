# Primevue


```text
simpleicons/P/Primevue
```

```text
include('simpleicons/P/Primevue')
```



| Illustration | Primevue |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Primevue.png) | ![illustration for Primevue](../../simpleicons/P/Primevue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrimevueXs>`
- `<$PrimevueSm>`
- `<$PrimevueMd>`
- `<$PrimevueLg>`





## Primevue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Primevue
include('simpleicons/P/Primevue')

' renders the element
Primevue('Primevue', 'Primevue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Primevue
include('simpleicons/P/Primevue')

' renders the element
Primevue('Primevue', 'Primevue', 'an optional tech label', 'an optional description')
@enduml
```

