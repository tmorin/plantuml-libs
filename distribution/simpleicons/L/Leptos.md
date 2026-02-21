# Leptos


```text
simpleicons/L/Leptos
```

```text
include('simpleicons/L/Leptos')
```



| Illustration | Leptos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Leptos.png) | ![illustration for Leptos](../../simpleicons/L/Leptos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeptosXs>`
- `<$LeptosSm>`
- `<$LeptosMd>`
- `<$LeptosLg>`





## Leptos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Leptos
include('simpleicons/L/Leptos')

' renders the element
Leptos('Leptos', 'Leptos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Leptos
include('simpleicons/L/Leptos')

' renders the element
Leptos('Leptos', 'Leptos', 'an optional tech label', 'an optional description')
@enduml
```

