# Folo


```text
simpleicons/F/Folo
```

```text
include('simpleicons/F/Folo')
```



| Illustration | Folo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Folo.png) | ![illustration for Folo](../../simpleicons/F/Folo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FoloXs>`
- `<$FoloSm>`
- `<$FoloMd>`
- `<$FoloLg>`





## Folo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Folo
include('simpleicons/F/Folo')

' renders the element
Folo('Folo', 'Folo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Folo
include('simpleicons/F/Folo')

' renders the element
Folo('Folo', 'Folo', 'an optional tech label', 'an optional description')
@enduml
```

