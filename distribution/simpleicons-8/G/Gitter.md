# Gitter


```text
simpleicons-8/G/Gitter
```

```text
include('simpleicons-8/G/Gitter')
```



| Illustration | Gitter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Gitter.png) | ![illustration for Gitter](../../simpleicons-8/G/Gitter.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitter
include('simpleicons-8/G/Gitter')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Gitter
include('simpleicons-8/G/Gitter')

' renders the element
Gitter('Gitter', 'Gitter', 'an optional tech label', 'an optional description')
@enduml
```

