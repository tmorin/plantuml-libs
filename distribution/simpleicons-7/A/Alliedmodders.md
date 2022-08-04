# Alliedmodders


```text
simpleicons-7/A/Alliedmodders
```

```text
include('simpleicons-7/A/Alliedmodders')
```



| Illustration | Alliedmodders |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Alliedmodders.png) | ![illustration for Alliedmodders](../../simpleicons-7/A/Alliedmodders.Local.png) |




## Alliedmodders

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Alliedmodders
include('simpleicons-7/A/Alliedmodders')

' renders the element
Alliedmodders('Alliedmodders', 'Alliedmodders', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Alliedmodders
include('simpleicons-7/A/Alliedmodders')

' renders the element
Alliedmodders('Alliedmodders', 'Alliedmodders', 'an optional tech label', 'an optional description')
@enduml
```

