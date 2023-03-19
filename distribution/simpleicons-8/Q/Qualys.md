# Qualys


```text
simpleicons-8/Q/Qualys
```

```text
include('simpleicons-8/Q/Qualys')
```



| Illustration | Qualys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Q/Qualys.png) | ![illustration for Qualys](../../simpleicons-8/Q/Qualys.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QualysXs>`
- `<$QualysSm>`
- `<$QualysMd>`
- `<$QualysLg>`





## Qualys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Qualys
include('simpleicons-8/Q/Qualys')

' renders the element
Qualys('Qualys', 'Qualys', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qualys
include('simpleicons-8/Q/Qualys')

' renders the element
Qualys('Qualys', 'Qualys', 'an optional tech label', 'an optional description')
@enduml
```

