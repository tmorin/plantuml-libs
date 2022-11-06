# Zincsearch


```text
simpleicons-7/Z/Zincsearch
```

```text
include('simpleicons-7/Z/Zincsearch')
```



| Illustration | Zincsearch |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zincsearch.png) | ![illustration for Zincsearch](../../simpleicons-7/Z/Zincsearch.Local.png) |




## Zincsearch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zincsearch
include('simpleicons-7/Z/Zincsearch')

' renders the element
Zincsearch('Zincsearch', 'Zincsearch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Zincsearch
include('simpleicons-7/Z/Zincsearch')

' renders the element
Zincsearch('Zincsearch', 'Zincsearch', 'an optional tech label', 'an optional description')
@enduml
```

