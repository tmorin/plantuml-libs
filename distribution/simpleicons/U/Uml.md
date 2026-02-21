# Uml


```text
simpleicons/U/Uml
```

```text
include('simpleicons/U/Uml')
```



| Illustration | Uml |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Uml.png) | ![illustration for Uml](../../simpleicons/U/Uml.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UmlXs>`
- `<$UmlSm>`
- `<$UmlMd>`
- `<$UmlLg>`





## Uml

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Uml
include('simpleicons/U/Uml')

' renders the element
Uml('Uml', 'Uml', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Uml
include('simpleicons/U/Uml')

' renders the element
Uml('Uml', 'Uml', 'an optional tech label', 'an optional description')
@enduml
```

