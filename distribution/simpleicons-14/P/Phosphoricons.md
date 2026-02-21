# Phosphoricons


```text
simpleicons-14/P/Phosphoricons
```

```text
include('simpleicons-14/P/Phosphoricons')
```



| Illustration | Phosphoricons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Phosphoricons.png) | ![illustration for Phosphoricons](../../simpleicons-14/P/Phosphoricons.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhosphoriconsXs>`
- `<$PhosphoriconsSm>`
- `<$PhosphoriconsMd>`
- `<$PhosphoriconsLg>`





## Phosphoricons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Phosphoricons
include('simpleicons-14/P/Phosphoricons')

' renders the element
Phosphoricons('Phosphoricons', 'Phosphoricons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Phosphoricons
include('simpleicons-14/P/Phosphoricons')

' renders the element
Phosphoricons('Phosphoricons', 'Phosphoricons', 'an optional tech label', 'an optional description')
@enduml
```

