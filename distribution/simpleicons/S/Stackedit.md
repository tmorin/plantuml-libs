# Stackedit


```text
simpleicons/S/Stackedit
```

```text
include('simpleicons/S/Stackedit')
```



| Illustration | Stackedit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Stackedit.png) | ![illustration for Stackedit](../../simpleicons/S/Stackedit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StackeditXs>`
- `<$StackeditSm>`
- `<$StackeditMd>`
- `<$StackeditLg>`





## Stackedit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Stackedit
include('simpleicons/S/Stackedit')

' renders the element
Stackedit('Stackedit', 'Stackedit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stackedit
include('simpleicons/S/Stackedit')

' renders the element
Stackedit('Stackedit', 'Stackedit', 'an optional tech label', 'an optional description')
@enduml
```

