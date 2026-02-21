# Gitter


```text
simpleicons/G/Gitter
```

```text
include('simpleicons/G/Gitter')
```



| Illustration | Gitter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Gitter.png) | ![illustration for Gitter](../../simpleicons/G/Gitter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitterXs>`
- `<$GitterSm>`
- `<$GitterMd>`
- `<$GitterLg>`





## Gitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Gitter
include('simpleicons/G/Gitter')

' renders the element
Gitter('Gitter', 'Gitter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gitter
include('simpleicons/G/Gitter')

' renders the element
Gitter('Gitter', 'Gitter', 'an optional tech label', 'an optional description')
@enduml
```

