# Greensock


```text
simpleicons-7/G/Greensock
```

```text
include('simpleicons-7/G/Greensock')
```



| Illustration | Greensock |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/G/Greensock.png) | ![illustration for Greensock](../../simpleicons-7/G/Greensock.Local.png) |




## Greensock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Greensock
include('simpleicons-7/G/Greensock')

' renders the element
Greensock('Greensock', 'Greensock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Greensock
include('simpleicons-7/G/Greensock')

' renders the element
Greensock('Greensock', 'Greensock', 'an optional tech label', 'an optional description')
@enduml
```

