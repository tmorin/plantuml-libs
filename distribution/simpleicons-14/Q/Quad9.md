# Quad9


```text
simpleicons-14/Q/Quad9
```

```text
include('simpleicons-14/Q/Quad9')
```



| Illustration | Quad9 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Q/Quad9.png) | ![illustration for Quad9](../../simpleicons-14/Q/Quad9.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Quad9Xs>`
- `<$Quad9Sm>`
- `<$Quad9Md>`
- `<$Quad9Lg>`





## Quad9

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Quad9
include('simpleicons-14/Q/Quad9')

' renders the element
Quad9('Quad9', 'Quad9', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Quad9
include('simpleicons-14/Q/Quad9')

' renders the element
Quad9('Quad9', 'Quad9', 'an optional tech label', 'an optional description')
@enduml
```

