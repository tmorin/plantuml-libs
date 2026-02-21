# Scilab


```text
simpleicons-14/S/Scilab
```

```text
include('simpleicons-14/S/Scilab')
```



| Illustration | Scilab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Scilab.png) | ![illustration for Scilab](../../simpleicons-14/S/Scilab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScilabXs>`
- `<$ScilabSm>`
- `<$ScilabMd>`
- `<$ScilabLg>`





## Scilab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Scilab
include('simpleicons-14/S/Scilab')

' renders the element
Scilab('Scilab', 'Scilab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Scilab
include('simpleicons-14/S/Scilab')

' renders the element
Scilab('Scilab', 'Scilab', 'an optional tech label', 'an optional description')
@enduml
```

