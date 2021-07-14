# Fujitsu


```text
simpleicons-5/F/Fujitsu
```

```text
include('simpleicons-5/F/Fujitsu')
```



| Illustration | Fujitsu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fujitsu.png) | ![illustration for Fujitsu](../../simpleicons-5/F/Fujitsu.Local.png) |




## Fujitsu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fujitsu
include('simpleicons-5/F/Fujitsu')

' renders the element
Fujitsu('Fujitsu', 'Fujitsu', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fujitsu
include('simpleicons-5/F/Fujitsu')

' renders the element
Fujitsu('Fujitsu', 'Fujitsu', 'an optional tech label')
@enduml
```

