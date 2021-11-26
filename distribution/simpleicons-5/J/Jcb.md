# Jcb


```text
simpleicons-5/J/Jcb
```

```text
include('simpleicons-5/J/Jcb')
```



| Illustration | Jcb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jcb.png) | ![illustration for Jcb](../../simpleicons-5/J/Jcb.Local.png) |




## Jcb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jcb
include('simpleicons-5/J/Jcb')

' renders the element
Jcb('Jcb', 'Jcb', 'an optional tech label')
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

' loads the Item which embeds the element Jcb
include('simpleicons-5/J/Jcb')

' renders the element
Jcb('Jcb', 'Jcb', 'an optional tech label')
@enduml
```

