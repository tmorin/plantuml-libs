# Fujitsu


```text
simpleicons-6/F/Fujitsu
```

```text
include('simpleicons-6/F/Fujitsu')
```



| Illustration | Fujitsu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Fujitsu.png) | ![illustration for Fujitsu](../../simpleicons-6/F/Fujitsu.Local.png) |




## Fujitsu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fujitsu
include('simpleicons-6/F/Fujitsu')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Fujitsu
include('simpleicons-6/F/Fujitsu')

' renders the element
Fujitsu('Fujitsu', 'Fujitsu', 'an optional tech label')
@enduml
```

