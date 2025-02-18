# Ansys


```text
simpleicons-14/A/Ansys
```

```text
include('simpleicons-14/A/Ansys')
```



| Illustration | Ansys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Ansys.png) | ![illustration for Ansys](../../simpleicons-14/A/Ansys.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnsysXs>`
- `<$AnsysSm>`
- `<$AnsysMd>`
- `<$AnsysLg>`





## Ansys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ansys
include('simpleicons-14/A/Ansys')

' renders the element
Ansys('Ansys', 'Ansys', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ansys
include('simpleicons-14/A/Ansys')

' renders the element
Ansys('Ansys', 'Ansys', 'an optional tech label', 'an optional description')
@enduml
```

