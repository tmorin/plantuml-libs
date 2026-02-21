# Meizu


```text
simpleicons/M/Meizu
```

```text
include('simpleicons/M/Meizu')
```



| Illustration | Meizu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Meizu.png) | ![illustration for Meizu](../../simpleicons/M/Meizu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MeizuXs>`
- `<$MeizuSm>`
- `<$MeizuMd>`
- `<$MeizuLg>`





## Meizu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Meizu
include('simpleicons/M/Meizu')

' renders the element
Meizu('Meizu', 'Meizu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Meizu
include('simpleicons/M/Meizu')

' renders the element
Meizu('Meizu', 'Meizu', 'an optional tech label', 'an optional description')
@enduml
```

