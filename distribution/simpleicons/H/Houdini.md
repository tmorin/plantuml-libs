# Houdini


```text
simpleicons/H/Houdini
```

```text
include('simpleicons/H/Houdini')
```



| Illustration | Houdini |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Houdini.png) | ![illustration for Houdini](../../simpleicons/H/Houdini.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HoudiniXs>`
- `<$HoudiniSm>`
- `<$HoudiniMd>`
- `<$HoudiniLg>`





## Houdini

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Houdini
include('simpleicons/H/Houdini')

' renders the element
Houdini('Houdini', 'Houdini', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Houdini
include('simpleicons/H/Houdini')

' renders the element
Houdini('Houdini', 'Houdini', 'an optional tech label', 'an optional description')
@enduml
```

