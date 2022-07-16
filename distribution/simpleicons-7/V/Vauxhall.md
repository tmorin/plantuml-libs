# Vauxhall


```text
simpleicons-7/V/Vauxhall
```

```text
include('simpleicons-7/V/Vauxhall')
```



| Illustration | Vauxhall |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vauxhall.png) | ![illustration for Vauxhall](../../simpleicons-7/V/Vauxhall.Local.png) |




## Vauxhall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vauxhall
include('simpleicons-7/V/Vauxhall')

' renders the element
Vauxhall('Vauxhall', 'Vauxhall', 'an optional tech label')
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

' loads the Item which embeds the element Vauxhall
include('simpleicons-7/V/Vauxhall')

' renders the element
Vauxhall('Vauxhall', 'Vauxhall', 'an optional tech label')
@enduml
```

