# Httpie


```text
simpleicons-7/H/Httpie
```

```text
include('simpleicons-7/H/Httpie')
```



| Illustration | Httpie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Httpie.png) | ![illustration for Httpie](../../simpleicons-7/H/Httpie.Local.png) |




## Httpie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Httpie
include('simpleicons-7/H/Httpie')

' renders the element
Httpie('Httpie', 'Httpie', 'an optional tech label')
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

' loads the Item which embeds the element Httpie
include('simpleicons-7/H/Httpie')

' renders the element
Httpie('Httpie', 'Httpie', 'an optional tech label')
@enduml
```

